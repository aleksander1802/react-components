import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { FormPage } from './FormPage';
import store from '../../store/store';
import { Provider } from 'react-redux';

describe('AddCardForm page render', () => {
  test('AddCardForm page rendered', () => {
    const form = render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(form).toBeTruthy();
    expect(form).toBeDefined();
  });
});
