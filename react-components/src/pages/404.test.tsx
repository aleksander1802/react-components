import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Error404 } from './404';

describe('Error page render', () => {
  test('Error page rendered', () => {
    const error = render(<Error404 />);
    expect(error).toBeTruthy();
    expect(error).toBeDefined();
  });
});
