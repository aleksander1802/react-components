import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';
import { FieldError } from 'react-hook-form';

describe('ErrorMessage component', () => {
  it('renders error message', () => {
    const error = { message: 'Something went wrong' } as FieldError;
    const { getByText } = render(<ErrorMessage error={error} />);
    expect(getByText('Something went wrong')).toBeInTheDocument();
  });
});
