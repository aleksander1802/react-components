import { renderHook } from '@testing-library/react';
import { useHttp } from './http.hook';
import { vi } from 'vitest';

describe('useHttp', () => {
  it('should make a successful GET request', async () => {
    const responseData = { foo: 'bar' };
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(responseData),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useHttp());

    const data = await result.current.request('http://example.com');

    expect(mockFetch).toHaveBeenCalledWith('http://example.com', {
      method: 'GET',
      body: null,
      headers: { 'Content-Type': 'application/json' },
    });

    expect(data).toBeDefined();
    expect(data).toBeTruthy();
  });

  it('should throw an error for an unsuccessful request', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useHttp());

    await expect(result.current.request('http://example.com')).rejects.toThrow(
      'Could not fetch http://example.com, status: 404'
    );
  });
});
