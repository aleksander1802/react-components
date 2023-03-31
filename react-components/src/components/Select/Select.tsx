import { SelectProps } from './Select.props';

import cn from 'classnames';

import styles from './Select.module.css';

export const Select = ({
  register,
  options,
  label,
  errorMesage,
  error,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <div className={styles.inputWrapper}>
      <select
        {...register(label, {
          required: {
            value: true,
            message: errorMesage,
          },
        })}
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        {...props}
      >
        <option value="">{'Select color'}</option>
        {options.map((str, index) => (
          <option value={str} key={index}>
            {str}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
