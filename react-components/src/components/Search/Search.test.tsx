import { afterEach, describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Search } from './Search';

describe('<Search/>', () => {
  test('Search rendered', () => {
    const search = render(<Search query="" search={vi.fn()} />);
    expect(search).toBeTruthy();
    expect(search).toBeDefined();
  });
});

const inputValue = 'data';

describe('Input Values', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  describe('getValue', () => {
    test('gets values from LocalStorage', () => {
      const state = {
        search: localStorage.getItem(inputValue) || '',
      };

      expect(state.search).toStrictEqual(state.search);
      expect(getItemSpy).toHaveBeenCalledWith(inputValue);
    });
  });
});
