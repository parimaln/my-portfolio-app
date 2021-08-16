import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UdacityProjectWrapper from './UdacityProjectWrapper';

describe('<UdacityProjectWrapper />', () => {
  test('it should mount', () => {
    render(<UdacityProjectWrapper />);
    
    const udacityProjectWrapper = screen.getByTestId('UdacityProjectWrapper');

    expect(udacityProjectWrapper).toBeInTheDocument();
  });
});