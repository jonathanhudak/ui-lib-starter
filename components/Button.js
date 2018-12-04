import styled from 'styled-components';

var PRIMARY_COLOR = 'limegreen';
var Button = styled.button.withConfig({
  displayName: "Button",
  componentId: "sc-13qgl51-0"
})(["background:", ";color:", ";box-sizing:border-box;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid ", ";border-radius:3px;"], function (props) {
  return props.primary ? PRIMARY_COLOR : 'white';
}, function (props) {
  return props.primary ? 'white' : PRIMARY_COLOR;
}, PRIMARY_COLOR);

export { Button };
