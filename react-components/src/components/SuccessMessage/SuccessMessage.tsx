import { SuccessMessageProps } from './SuccessMessage.props';

import styles from './SuccessMessage.module.css';

export const SuccessMessage = ({ success, message }: SuccessMessageProps): JSX.Element => {
  return (
    <>
      <div className={styles.successMessage} data-testid="success-message">
        {success ? message : null}
      </div>
    </>
  );
};
