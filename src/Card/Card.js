import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  color: ${props => props.color};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding 16px;
  margin: 8px;
  box-shadow: 0 0 3px rgba(0,0,0, .5);
  background: ${props => props.bg || 'white'};
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : 'none')};
`;

export default Card;
