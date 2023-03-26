import { render } from '@testing-library/react';

import { CardsForm } from './CardsForm';
import { transformDate } from './dateTransform';

describe('CardsForm component render', () => {
  it('should render the form correctly', () => {
    render(<CardsForm data={[]} />);
  });
});

describe('transformDate', () => {
  it('transforms date correctly', () => {
    const dateStr1 = '2023-01-26';
    const dateStr2 = '2023-02-26';
    const dateStr3 = '2023-03-26';
    const dateStr4 = '2023-04-26';
    const dateStr5 = '2023-05-26';
    const dateStr6 = '2023-06-26';
    const dateStr7 = '2023-07-26';
    const dateStr8 = '2023-08-26';
    const dateStr9 = '2023-09-26';
    const dateStr10 = '2023-10-26';
    const dateStr11 = '2023-11-26';
    const dateStr12 = '2023-12-26';
    const dateStr = '';
    const expectedOutput1 = 'January 26, 2023';
    const expectedOutput2 = 'February 26, 2023';
    const expectedOutput3 = 'March 26, 2023';
    const expectedOutput4 = 'April 26, 2023';
    const expectedOutput5 = 'May 26, 2023';
    const expectedOutput6 = 'June 26, 2023';
    const expectedOutput7 = 'July 26, 2023';
    const expectedOutput8 = 'August 26, 2023';
    const expectedOutput9 = 'September 26, 2023';
    const expectedOutput10 = 'October 26, 2023';
    const expectedOutput11 = 'November 26, 2023';
    const expectedOutput12 = 'December 26, 2023';
    const expectedOutput = 'Month undefined, ';
    const result1 = transformDate(dateStr1);
    const result2 = transformDate(dateStr2);
    const result3 = transformDate(dateStr3);
    const result4 = transformDate(dateStr4);
    const result5 = transformDate(dateStr5);
    const result6 = transformDate(dateStr6);
    const result7 = transformDate(dateStr7);
    const result8 = transformDate(dateStr8);
    const result9 = transformDate(dateStr9);
    const result10 = transformDate(dateStr10);
    const result11 = transformDate(dateStr11);
    const result12 = transformDate(dateStr12);
    const result = transformDate(dateStr);
    expect(result1).toEqual(expectedOutput1);
    expect(result2).toEqual(expectedOutput2);
    expect(result3).toEqual(expectedOutput3);
    expect(result4).toEqual(expectedOutput4);
    expect(result5).toEqual(expectedOutput5);
    expect(result6).toEqual(expectedOutput6);
    expect(result7).toEqual(expectedOutput7);
    expect(result8).toEqual(expectedOutput8);
    expect(result9).toEqual(expectedOutput9);
    expect(result10).toEqual(expectedOutput10);
    expect(result11).toEqual(expectedOutput11);
    expect(result12).toEqual(expectedOutput12);
    expect(result).toEqual(expectedOutput);
  });
});
