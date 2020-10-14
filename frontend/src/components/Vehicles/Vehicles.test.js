import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Vehicles from './Vehicles';

describe('<Vehicles />', () => {
  test('it should mount', () => {
    render(<Vehicles />);
    
    const vehicles = screen.getByTestId('Vehicles');

    expect(vehicles).toBeInTheDocument();
  });
});