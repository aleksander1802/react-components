import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import About from './About';

describe('About page render', () => {
  test('About page rendered', () => {
    const about = render(<About />);
    expect(about).toBeTruthy();
    expect(about).toBeDefined();
  });
});
