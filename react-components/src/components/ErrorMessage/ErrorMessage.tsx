import { ErrorMessageProps } from './ErrorMessage.props';

import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ error, message }: ErrorMessageProps): JSX.Element => {
  return (
    <>
      <div className={styles.errorMessage}>{error ? message : null}</div>
    </>
  );
};
