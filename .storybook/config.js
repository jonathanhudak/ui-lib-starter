import { configure } from '@storybook/react';

function loadStories() {
  require('..');
  // You can require as many stories as you need.
}

configure(loadStories, module);