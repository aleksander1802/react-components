import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('Application render', () => {
  test('App rendered', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });
});
