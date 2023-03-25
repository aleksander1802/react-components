import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface SuccessMessageProps extends ErrorMessagePropsClassName {
  success: boolean;
  message: string;
}

export type ErrorMessagePropsClassName = DetailedHTMLProps<
  InputHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
