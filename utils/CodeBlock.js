/* eslint react/jsx-key: 0 */

import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
import styled from '@emotion/styled';
import libraryComponentsDirs from '../src/**/*.js';

const StyledEditor = styled(LiveEditor)`
  background: #1a2230;
`;

const libraryComponents = Object.entries(libraryComponentsDirs).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: value.index.default,
  }),
  {}
);

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <div>
        <LiveProvider
          code={children.trim()}
          scope={{
            mdx,
            React,
            ...libraryComponents,
          }}
        >
          <div>
            <LivePreview />
            <StyledEditor />
            <LiveError />
          </div>
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
