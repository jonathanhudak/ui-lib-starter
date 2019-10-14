/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { MDXProvider } from '@mdx-js/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import CodeBlock from './utils/CodeBlock';
// eslint-disable-next-line import/no-unresolved
import mdx from './src/**/*.mdx';
import Home from './src/home.mdx';

const H1 = styled.h1`
  font-family: sans-serif;
`;
const P = styled.p`
  font-family: sans-serif;
`;

// eslint-disable-next-line no-undef
const root = document.getElementById('root');

const components = {
  h1: H1,
  p: P,
  pre: props => <div {...props} />,
  code: CodeBlock,
};

const rootPath = process.env.ROOT || '/';

function App() {
  return (
    <MDXProvider components={components}>
      <Router>
        <div>
          <nav>
            <ul>
              {Object.keys(mdx).map(path => (
                <li key={path}>
                  <Link to={`${path}`}>{path}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Switch>
            {Object.entries(mdx).map(([path, module]) => {
              if (!module[path]) return null;
              const RouteComponent = module[path].default;
              return (
                <Route path={`${rootPath}${path}`} key={path}>
                  <RouteComponent />
                </Route>
              );
            })}
            <Route path={rootPath}>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </MDXProvider>
  );
}

render(<App />, root);
