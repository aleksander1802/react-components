import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { Cards } from './Cards';

describe('Cards component render', () => {
  test('Cards component rendered', () => {
    const wrapper = render(<Cards />);
    expect(wrapper).toBeTruthy();
  });
});

it('should return list of 60 cards', () => {
  render(<Cards />);
  const list = screen.getByRole('list', {
    name: /cards/i,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(60);
});
