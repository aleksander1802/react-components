import { SuccessMessageProps } from './SuccessMessage.props';

import styles from './SuccessMessage.module.css';

export const SuccessMessage = ({ success, message }: SuccessMessageProps): JSX.Element => {
  return (
    <>
      <div className={styles.successMessage}>{success ? message : null}</div>
    </>
  );
};
