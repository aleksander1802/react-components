import { ErrorMessageProps } from './ErrorMessage.props';

import cn from 'classnames';

import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ className, error, ...props }: ErrorMessageProps): JSX.Element => {
  return (
    <span className={cn(styles.errorMessage, className)} {...props}>
      {error.message}
    </span>
  );
};
