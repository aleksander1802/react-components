import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store, { AppDispatch } from './store/store';
import App from './App';

describe('App component', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});

describe('Redux types', () => {
  it('should define AppDispatch type', () => {
    const testValue: AppDispatch = store.dispatch;
    expect(testValue).toBeDefined();
  });
});
