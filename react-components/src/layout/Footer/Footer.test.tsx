import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component render', () => {
  test('Footer component rendered', () => {
    const footer = render(<Footer />);

    expect(footer).toBeTruthy();
    expect(footer).toBeDefined();
  });
});
