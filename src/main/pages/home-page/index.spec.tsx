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
    const {getAllByA11yLabel} = render(<HomePage />);
    const messageLabel = getAllByA11yLabel('message');
    const brandLabel = getAllByA11yLabel('brand');

    expect(messageLabel[0].children[0]).toBe('Agora sim vai dar certo \\o/');
    expect(brandLabel[0].children[0]).toBe('Consulta Remédios');
  });
});
