import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ErrorMessageProps extends ErrorMessagePropsClassName {
  error: boolean;
  message: string;
}

export type ErrorMessagePropsClassName = DetailedHTMLProps<
  InputHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
