import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Search } from './Search';

describe('<Search/>', () => {
  test('Search rendered', () => {
    const wrapper = render(<Search />);
    expect(wrapper).toBeTruthy();
  });
});
