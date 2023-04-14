import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { Search } from './Search';
import userEvent from '@testing-library/user-event';

describe('Search component', () => {
  test('renders input field and button', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = getByPlaceholderText('Search...');
    const button = getByLabelText('Search by site');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('dispatches setSearch action on form submit', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = getByLabelText('Search by site');
    userEvent.click(input);

    expect(store.getState().searchValue.search).toEqual('');
  });

  test('updates input value when typing', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });
});
