import { FormProps } from './AddCardForm.props';

import cn from 'classnames';

import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const SelectHTMLAttributes = forwardRef(
  (
    { className, error, ...props }: FormProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={styles.inputWrapper}>
        <input
          className={cn(className, styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
