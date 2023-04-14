import { act, renderHook } from '@testing-library/react';
import useModal from './modal.hook';

describe('useModal', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current[0]).toBe(false);
  });

  it('should toggle modal', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(false);
  });
});
