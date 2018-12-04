import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

test('Button default', () => {
  expect(
    renderer.create(<Button>Perform action</Button>).toJSON()
  ).toMatchSnapshot();
});

test('Button primary', () => {
  expect(
    renderer.create(<Button primary>Perform action</Button>).toJSON()
  ).toMatchSnapshot();
});
