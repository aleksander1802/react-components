import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component render', () => {
  test('Header component rendered', () => {
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(header).toBeTruthy();
    expect(header).toBeDefined();
  });

  const state = {
    title: '' || 'Main' || 'About Us',
  };

  test('state is defined', () => {
    expect(state).toBeDefined();
  });

  test('default title is equal Main', () => {
    expect(state.title).toEqual('Main');
  });
});
