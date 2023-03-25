import { render, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { AddCardForm } from './AddCardForm';

describe('AddCardForm', () => {
  it('should render the form correctly', () => {
    render(<AddCardForm setDataState={vi.fn()} />);

    // Check that the form elements are rendered
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Eye color:')).toBeInTheDocument();
    expect(screen.getByText('Age:')).toBeInTheDocument();
    expect(screen.getByText('Messengers:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('Picture:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should display an error message when the form is submitted with invalid data', () => {
    render(<AddCardForm setDataState={vi.fn()} />);

    // Fill in the form with invalid data
    fireEvent.change(screen.getByLabelText('name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('date'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('eye'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('age'), { target: { value: '217' } });
    fireEvent.change(
      screen.getByLabelText('Telegram' || 'Viber' || 'WhatsApp' || 'Skype' || 'VK Messenger'),
      { target: { value: '' } }
    );
    fireEvent.change(screen.getByLabelText('gender0' || 'gender1' || 'gender2'), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByLabelText('image'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Check that the error messages are displayed
    expect(
      screen.getByText(
        'The first letter must be uppercase. Must be at least 4 characters in length. Spaces are not allowed.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Required field. Enter the date.')).toBeInTheDocument();
    expect(screen.getByText('Please select eye color.')).toBeInTheDocument();
    expect(screen.getByText('Required field. Enter correct value.')).toBeInTheDocument();
    expect(screen.getByText('Please select messengers.')).toBeInTheDocument();
    expect(screen.getByText('Please select gender.')).toBeInTheDocument();
    expect(screen.getByText('Please select image.')).toBeInTheDocument();
  });
});
