import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Htag } from './Htag';

describe('Htag component render', () => {
  test('Htag component rendered', () => {
    const h1tag = render(<Htag tag={'h1'} />);
    const h2tag = render(<Htag tag={'h2'} />);
    const h3tag = render(<Htag tag={'h3'} />);
    const htag = render(<Htag tag={undefined}></Htag>);

    expect(h1tag).toBeTruthy();
    expect(h1tag).toBeDefined();

    expect(h2tag).toBeTruthy();
    expect(h2tag).toBeDefined();

    expect(h3tag).toBeTruthy();
    expect(h3tag).toBeDefined();

    expect(htag).toBeDefined();
    expect(htag).toBeDefined();
  });
});
