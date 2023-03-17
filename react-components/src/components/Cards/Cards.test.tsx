import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { Cards } from './Cards';
import { CardsProps } from './Cards.props';
import { cards } from '../../api/cards';

describe('Cards component render', () => {
  test('Cards component rendered', () => {
    const cards = render(<Cards />);

    expect(cards).toBeTruthy();
    expect(cards).toBeDefined();
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

test('should check that item values according to their types', () => {
  const array: CardsProps[] = cards;
  array.map((item) => {
    expect(item._id).toBeTypeOf('string');
    expect(item.index).toBeTypeOf('number');
    expect(item.isActive).toBeTypeOf('boolean');
    expect(item.balance).toBeTypeOf('string');
    expect(item.url).toBeTypeOf('string');
    expect(item.age).toBeTypeOf('number');
    expect(item.eyeColor).toBeTypeOf('string');
    expect(item.name).toBeTypeOf('string');
    expect(item.gender).toBeTypeOf('string');
    expect(item.company).toBeTypeOf('string');
    expect(item.email).toBeTypeOf('string');
    expect(item.phone).toBeTypeOf('string');
    expect(item.address).toBeTypeOf('string');
    expect(item.registered).toBeTypeOf('string');
  });
});
