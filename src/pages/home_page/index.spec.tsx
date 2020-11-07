import 'react-native';
import React from 'react';
import HomePage from './';

import {render} from '@testing-library/react-native';

describe('Home page', () => {
  it('renders correctly', () => {
    render(<HomePage />);
  });

  it('should display correcly infos', () => {
    const {getAllByA11yLabel} = render(<HomePage />);
    const messageLabel = getAllByA11yLabel('message');
    const brandLabel = getAllByA11yLabel('brand');

    expect(messageLabel[0].children[0]).toEqual('Agora sim vai dar certo \\o/');
    expect(brandLabel[0].children[0]).toEqual('Consulta Remédios');
  });
});
