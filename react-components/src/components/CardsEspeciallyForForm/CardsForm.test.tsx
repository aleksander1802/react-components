import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { AddCardForm } from '../../components/AddCardForm/AddCardForm';
import { FormCard } from '../../components/AddCardForm/AddCardForm.props';

import userEvent from '@testing-library/user-event';
import { transformDate } from './dateTransform';

describe('setForm', () => {
  it('adds a new form card to the state', () => {
    const formSlice = createSlice({
      name: 'form',
      initialState: [],
      reducers: {
        setForm: (state: FormCard[], action: PayloadAction<FormCard>) => {
          state.push(action.payload);
        },
      },
    });

    const store = configureStore({
      reducer: formSlice.reducer,
    });

    render(
      <Provider store={store}>
        <AddCardForm />
      </Provider>
    );

    const nameInput = screen.getByText('Name:');
    const dateInput = screen.getByText('Birthday:');
    const eyeInput = screen.getByText('Eye color:');
    const ageInput = screen.getByText('Age:');
    const messengersInput = screen.getByText('Messengers:');
    const genderInput = screen.getByText('Gender:');
    const imageInput = screen.getByText('Picture:');

    userEvent.type(nameInput, 'Alex Rud');
    userEvent.type(dateInput, '2022-01-01');
    userEvent.type(eyeInput, 'Blue');
    userEvent.type(ageInput, '25');
    userEvent.type(messengersInput, 'Telegram');
    userEvent.type(genderInput, 'Male');
    userEvent.type(imageInput, 'https://example.com/image.jpg');

    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    setTimeout(() => {
      expect(store.getState().length).toEqual(1);
      expect(store.getState()[0]).toEqual({
        name: 'Alex Rud',
        date: '2022-01-01',
        eye: 'Blue',
        age: '25',
        messengers: 'Telegram',
        gender: 'Male',
        image: 'https://example.com/image.jpg',
      });
    }, 2000);
  });
});

describe('transformDate', () => {
  it('should return January date for month 01', () => {
    const date = transformDate('2022-01-01');
    expect(date).toBe('January 01, 2022');
  });

  it('should return February date for month 02', () => {
    const date = transformDate('2022-02-01');
    expect(date).toBe('February 01, 2022');
  });

  it('should return March date for month 03', () => {
    const date = transformDate('2022-03-01');
    expect(date).toBe('March 01, 2022');
  });

  it('should return April date for month 04', () => {
    const date = transformDate('2022-04-01');
    expect(date).toBe('April 01, 2022');
  });

  it('should return May date for month 05', () => {
    const date = transformDate('2022-05-01');
    expect(date).toBe('May 01, 2022');
  });

  it('should return June date for month 06', () => {
    const date = transformDate('2022-06-01');
    expect(date).toBe('June 01, 2022');
  });

  it('should return July date for month 07', () => {
    const date = transformDate('2022-07-01');
    expect(date).toBe('July 01, 2022');
  });

  it('should return August date for month 08', () => {
    const date = transformDate('2022-08-01');
    expect(date).toBe('August 01, 2022');
  });

  it('should return September date for month 09', () => {
    const date = transformDate('2022-09-01');
    expect(date).toBe('September 01, 2022');
  });

  it('should return October date for month 10', () => {
    const date = transformDate('2022-10-01');
    expect(date).toBe('October 01, 2022');
  });

  it('should return November date for month 11', () => {
    const date = transformDate('2022-11-01');
    expect(date).toBe('November 01, 2022');
  });

  it('should return December date for month 12', () => {
    const date = transformDate('2022-12-01');
    expect(date).toBe('December 01, 2022');
  });

  it('should return default string for invalid month', () => {
    const date = transformDate('2022-13-01');
    expect(date).toBe('Month 01, 2022');
  });
});
