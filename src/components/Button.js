import styled from 'styled-components';

const PRIMARY_COLOR = 'limegreen';

export const Button = styled.button`
  background: ${props => (props.primary ? PRIMARY_COLOR : 'white')};
  color: ${props => (props.primary ? 'white' : PRIMARY_COLOR)};
  box-sizing: border-box;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 3px;
`;
