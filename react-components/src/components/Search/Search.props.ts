import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SearchValue = {
  search: string;
};

export type SearchProps = DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>;
