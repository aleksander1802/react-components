import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Htag } from './Htag';

describe('Htag component render', () => {
  test('Htag component rendered', () => {
    const htag = render(<Htag tag={'h1' || 'h2' || 'h3'} />);
    expect(htag).toBeTruthy();
    expect(htag).toBeDefined();
  });
});
