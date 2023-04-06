import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SearchValue = {
  search: (query: string) => void;
  query: string;
};

export type SearchProps = DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> &
  SearchValue;
