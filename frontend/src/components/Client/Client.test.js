import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Client from './Client';

describe('<Client />', () => {
  test('it should mount', () => {
    render(<Client />);
    
    const client = screen.getByTestId('Client');

    expect(client).toBeInTheDocument();
  });
});