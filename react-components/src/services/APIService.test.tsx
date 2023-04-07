import { Mock, vi } from 'vitest';

describe('Testing API requests ', () => {
  it('should fetch correctly', () => {
    describe('Input Values', () => {
      beforeEach(() => {
        global.fetch = vi.fn(() => Promise.resolve({})) as Mock;
      });

      afterEach(() => {
        vi.restoreAllMocks();
      });
    });
  });
});
