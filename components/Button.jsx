import React from 'react';
import styled from 'styled-components';

const settings = { a: 1, b: 2 };

const Button = styled.button `
	background: ${ (props) => (props.primary
  ? 'limegreen'
  : 'white')};
	color: ${ (props) => (props.primary
  ? 'white'
  : 'limegreen')};

	box-sizing: border-box;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

export default Button;
