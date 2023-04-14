import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';
import { vi } from 'vitest';

describe('<Input />', () => {
  const testId = 'input';

  it('should render without error', () => {
    render(<Input />);
    const input = screen.getByTestId(testId);
    expect(input).toBeInTheDocument();
  });

  it('should handle input change', async () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);
    const input = screen.getByTestId(testId);
    const testValue = 'Test input value';
    await userEvent.type(input, testValue);
    expect(onChange).toHaveBeenCalledTimes(testValue.length);
    expect(input).toHaveValue(testValue);
  });

  it('should render with additional classes', () => {
    const className = 'custom-class';
    render(<Input className={className} />);
    const input = screen.getByTestId(testId);
    expect(input).toHaveClass(className);
  });
});
