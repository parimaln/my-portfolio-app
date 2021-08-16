import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Intro from './Intro';

describe('<Intro />', () => {
  test('it should mount', () => {
    render(<Intro />);
    
    const intro = screen.getByTestId('Intro');

    expect(intro).toBeInTheDocument();
  });
});