import { render, fireEvent, screen } from '@testing-library/react';
import { RefObject } from 'react';
import { vi } from 'vitest';
import { AddCardForm } from './AddCardForm';
import { nameInputValidation } from './CardsFormValidation';
import { dateInputValidation } from './CardsFormValidation';
import { ageInputValidation } from './CardsFormValidation';
import { eyeInputValidation } from './CardsFormValidation';
import { messengersInputValidation } from './CardsFormValidation';
import { genderInputValidation } from './CardsFormValidation';
import { imageInputValidation } from './CardsFormValidation';

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

describe('Input validation functions', () => {
  describe('nameInputValidation', () => {
    it('should return true when name is invalid', () => {
      const input = { current: { value: 'john' } } as RefObject<HTMLInputElement>;
      expect(nameInputValidation(input)).toBe(true);
    });

    it('should return false when name is valid', () => {
      const input = { current: { value: 'John' } } as RefObject<HTMLInputElement>;
      expect(nameInputValidation(input)).toBe(false);
    });
  });

  describe('dateInputValidation', () => {
    it('should return true when date is empty', () => {
      const input = { current: { value: '' } } as RefObject<HTMLInputElement>;
      expect(dateInputValidation(input)).toBe(true);
    });

    it('should return false when date is not empty', () => {
      const input = { current: { value: '2022-01-01' } } as RefObject<HTMLInputElement>;
      expect(dateInputValidation(input)).toBe(false);
    });
  });

  describe('ageInputValidation', () => {
    it('should return true when age is invalid', () => {
      const input = { current: { value: '0' } } as RefObject<HTMLInputElement>;
      expect(ageInputValidation(input)).toBe(true);
    });

    it('should return false when age is valid', () => {
      const input = { current: { value: '25' } } as RefObject<HTMLInputElement>;
      expect(ageInputValidation(input)).toBe(false);
    });
  });

  describe('eyeInputValidation', () => {
    it('should return true when eye color is not selected', () => {
      const input = { current: { value: '' } } as RefObject<HTMLSelectElement>;
      expect(eyeInputValidation(input)).toBe(true);
    });

    it('should return false when eye color is selected', () => {
      const input = { current: { value: 'brown' } } as RefObject<HTMLSelectElement>;
      expect(eyeInputValidation(input)).toBe(false);
    });
  });

  describe('messengersInputValidation', () => {
    it('should return true when no messenger is selected', () => {
      const input = [] as HTMLInputElement[];
      expect(messengersInputValidation(input)).toBe(true);
    });

    it('should return false when at least one messenger is selected', () => {
      const input = [{ checked: true }] as HTMLInputElement[];
      expect(messengersInputValidation(input)).toBe(false);
    });
  });

  describe('genderInputValidation', () => {
    it('should return true when no gender is selected', () => {
      const input = [] as HTMLInputElement[];
      expect(genderInputValidation(input)).toBe(true);
    });

    it('should return false when at least one gender is selected', () => {
      const input = [{ checked: true }] as HTMLInputElement[];
      expect(genderInputValidation(input)).toBe(false);
    });
  });

  describe('imageInputValidation', () => {
    it('should return true when no image is selected', () => {
      const input = { current: { value: '' } } as RefObject<HTMLInputElement>;
      expect(imageInputValidation(input)).toBe(true);
    });

    it('should return false when an image is selected', () => {
      const input = { current: { value: 'test.jpg' } } as RefObject<HTMLInputElement>;
      expect(imageInputValidation(input)).toBe(false);
    });
  });
});
