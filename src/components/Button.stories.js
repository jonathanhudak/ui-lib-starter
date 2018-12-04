import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Default Button</Button>
  ))
  .add('primary', () => (
    <Button onClick={action('clicked')} primary>
      Primary Button
      <span role="img" aria-label="Cool Icon">
        😎
      </span>
    </Button>
  ));
