import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OfficialProject from './OfficialProject';

describe('<OfficialProject />', () => {
  test('it should mount', () => {
    render(<OfficialProject />);
    
    const officialProject = screen.getByTestId('OfficialProject');

    expect(officialProject).toBeInTheDocument();
  });
});