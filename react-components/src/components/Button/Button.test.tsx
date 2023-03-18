import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button component render', () => {
  test('Button component rendered', () => {
    const button = render(<Button appearance="primary"></Button>);

    expect(button).toBeTruthy();
    expect(button).toBeDefined();
  });
});
