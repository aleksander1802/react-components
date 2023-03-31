import { render, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { AddCardForm } from './AddCardForm';

describe('AddCardForm', () => {
  it('should render the form correctly', () => {
    render(<AddCardForm setDataState={vi.fn()} />);

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

    expect(screen.getByText('Required field.')).toBeInTheDocument();
    expect(screen.getByText('The first letter must be uppercase.')).toBeInTheDocument();
    expect(screen.getByText('Must be at least 2 characters in length.')).toBeInTheDocument();
    expect(screen.getByText('Required field. Enter the full date.')).toBeInTheDocument();
    expect(screen.getByText('Please select an eye color')).toBeInTheDocument();
    expect(screen.getByText('The value should be between 1 and 100.')).toBeInTheDocument();
    expect(screen.getByText('Please select one or several messengers.')).toBeInTheDocument();
    expect(screen.getByText('Please select gender.')).toBeInTheDocument();
    expect(screen.getByText('Please select an image.')).toBeInTheDocument();
  });
});
