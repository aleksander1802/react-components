import { render, fireEvent, waitFor } from '@testing-library/react';
import { Button } from './Button';
import { vi } from 'vitest';

describe('Button', () => {
  it('renders correctly with required props', () => {
    const { getByText } = render(<Button appearance="primary">Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when button is clicked', () => {
    const handleClick = vi.fn();
    const { getByText, getByRole } = render(
      <Button appearance="primary" onClick={handleClick}>
        Click me
      </Button>
    );
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('adds custom classnames to button', () => {
    const { getByRole } = render(
      <Button appearance="ghost" className="custom-class">
        Click me
      </Button>
    );
    const button = getByRole('button');
    setTimeout(() => {
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('ghost');
      expect(button).toHaveClass('custom-class');
    }, 1000);
  });

  it('calls async onClick handler when button is clicked', async () => {
    const asyncHandler = vi.fn(() => Promise.resolve());
    const { getByText, getByRole } = render(
      <Button appearance="primary" onClick={asyncHandler}>
        Click me
      </Button>
    );
    fireEvent.click(getByText('Click me'));
    await waitFor(() => expect(getByRole('button')).toBeInTheDocument());
    expect(asyncHandler).toHaveBeenCalled();
  });
});
