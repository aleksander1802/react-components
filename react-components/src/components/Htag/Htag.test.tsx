/* eslint-disable react/no-children-prop */
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Htag } from './Htag';

describe('Htag component render', () => {
  test('Htag component rendered', () => {
    const wrapper = render(<Htag tag={'h1' || 'h2' || 'h3'} children={undefined} />);
    expect(wrapper).toBeTruthy();
  });
});
