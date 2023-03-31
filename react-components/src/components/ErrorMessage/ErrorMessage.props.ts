import { DetailedHTMLProps } from 'react';
import { FieldError } from 'react-hook-form';

export interface ErrorMessageProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  error: FieldError;
}
