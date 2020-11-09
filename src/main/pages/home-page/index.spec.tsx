import 'react-native';
import React from 'react';
import HomePage from '.';

import {render, cleanup} from '@testing-library/react-native';

describe('Home page', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders correctly', () => {
    const {toJSON} = render(<HomePage />);
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display correctly infos', () => {
    const {getByA11yLabel} = render(<HomePage />);
    const messageLabel = getByA11yLabel('message');
    const brandLabel = getByA11yLabel('brand');

    expect(messageLabel.children[0]).toBe('Agora sim vai dar certo \\o/');
    expect(brandLabel.children[0]).toBe('Consulta Remédios');
  });
});
