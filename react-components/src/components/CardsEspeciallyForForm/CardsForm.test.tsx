import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { AddCardForm } from '../../components/AddCardForm/AddCardForm';
import { FormCard } from '../../components/AddCardForm/AddCardForm.props';

import userEvent from '@testing-library/user-event';

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
