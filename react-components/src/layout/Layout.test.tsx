import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from './Layout';
import { BrowserRouter } from 'react-router-dom';

describe('Layout components render', () => {
  test('Layout components rendered', () => {
    const layout = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    expect(layout).toBeTruthy();
    expect(layout).toBeDefined();
  });
});
