import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { AnyAction, Dispatch, Store, configureStore } from '@reduxjs/toolkit';
import { AddCardForm } from './AddCardForm';
import cardsReducer from '../../components/Cards/cardsSlice';
import searchReducer from '../../components/Search/searchSlice';
import formReducer from '../../components/CardsEspeciallyForForm/formSlice';
import { vi } from 'vitest';

describe('AddCardForm component', () => {
  let mockDispatch: Dispatch<AnyAction>;
  let store: Store<unknown, AnyAction>;

  beforeEach(() => {
    mockDispatch = vi.fn() as Dispatch<AnyAction>;
    store = configureStore({
      reducer: {
        form: formReducer,
        allCards: cardsReducer,
        searchValue: searchReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    });
    store.dispatch = mockDispatch;
  });

  it('should render the form inputs', () => {
    render(
      <Provider store={store}>
        <AddCardForm />
      </Provider>
    );

    const nameInput = screen.getByLabelText('name');
    const dateInput = screen.getByLabelText('date');
    const eyeInput = screen.getByLabelText('eye');
    const ageInput = screen.getByLabelText('age');
    const messengersInputs = screen.getAllByLabelText(/messengers/);
    const genderInputs = screen.getAllByLabelText(/gender/);
    const imageInput = screen.getByLabelText('image');

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(eyeInput).toBeInTheDocument();
    expect(ageInput).toBeInTheDocument();
    expect(messengersInputs.length).toBeGreaterThan(0);
    expect(genderInputs.length).toBeGreaterThan(0);
    expect(imageInput).toBeInTheDocument();
  });

  it('should dispatch an action when the form is submitted with valid data', async () => {
    render(
      <Provider store={store}>
        <AddCardForm />
      </Provider>
    );

    const nameInput = screen.getByLabelText('name');
    const dateInput = screen.getByLabelText('date');
    const eyeInput = screen.getByLabelText('eye');
    const ageInput = screen.getByLabelText('age');
    const messengersInputs = screen.getAllByLabelText(/messengers/);
    const genderInputs = screen.getAllByLabelText(/gender/);
    const imageInput = screen.getByLabelText('image');

    userEvent.type(nameInput, 'Alex Rud');
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });
    fireEvent.change(eyeInput, { target: { value: 'blue' } });
    userEvent.type(ageInput, '30');
    fireEvent.click(messengersInputs[0]);
    fireEvent.click(genderInputs[0]);

    const image = new File(['image content'], 'test.png', { type: 'image/png' });
    fireEvent.change(imageInput, { target: { files: [image] } });

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
  });
});
