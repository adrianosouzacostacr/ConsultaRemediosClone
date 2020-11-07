import 'react-native';
import React from 'react';
import HomePage from './';

import renderer from 'react-test-renderer';

describe('Home page', () => {
  test('renders correctly', () => {
    renderer.create(<HomePage />);
  });
});
