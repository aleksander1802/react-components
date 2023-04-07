import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Cards } from '../../components/Cards/Cards';
import { Search } from '../../components/Search/Search';
import MainPage from './MainPage';

describe('should render Cards and Search components', () => {
  test('<Cards /> component rendered', () => {
    const cards = render(<Cards query={''} />);
    expect(cards).toBeTruthy();
    expect(cards).toBeDefined();
  });
  test('<Search /> component rendered', () => {
    const search = render(<Search query="d" search={vi.fn()} />);
    expect(search).toBeTruthy();
    expect(search).toBeDefined();
  });
  test('<MainPage /> page are rendered', () => {
    const mainpage = render(<MainPage />);
    expect(mainpage).toBeTruthy();
    expect(mainpage).toBeDefined();
  });
});
