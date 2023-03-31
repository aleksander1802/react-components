import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { AddCardForm } from './AddCardForm';

describe('AddCardForm', () => {
  it('should render the form correctly', () => {
    const form = render(<AddCardForm setDataState={vi.fn()} />);

    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Eye color:')).toBeInTheDocument();
    expect(screen.getByText('Age:')).toBeInTheDocument();
    expect(screen.getByText('Messengers:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('Picture:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();

    expect(form).toBeTruthy();
    expect(form).toBeDefined();
  });
});
