import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { FormPage } from './FormPage';

describe('AddCardForm page render', () => {
  test('AddCardForm page rendered', () => {
    const form = render(<FormPage />);
    expect(form).toBeTruthy();
    expect(form).toBeDefined();
  });
});
