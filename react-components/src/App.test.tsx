import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

describe('<App />', () => {
  it('should render without error', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(
      screen.getByText(/React Components © 2023 Designed by Aleksander Rudenko/i)
    ).toBeInTheDocument();
  });
});
