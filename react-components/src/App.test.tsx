import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App component render', () => {
  test('App component rendered', () => {
    const app = render(<App />);

    expect(app).toBeTruthy();
    expect(app).toBeDefined();
  });
});
