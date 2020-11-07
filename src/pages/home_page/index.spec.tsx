/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomePage from './';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<HomePage />).root;
});
