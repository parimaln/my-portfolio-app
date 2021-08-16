import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectListWrapper from './ProjectListWrapper';

describe('<ProjectListWrapper />', () => {
  test('it should mount', () => {
    render(<ProjectListWrapper />);
    
    const projectListWrapper = screen.getByTestId('ProjectListWrapper');

    expect(projectListWrapper).toBeInTheDocument();
  });
});