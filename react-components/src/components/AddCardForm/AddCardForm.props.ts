import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type SetDataState = {
  setDataState: (data: ValidFields[]) => void;
};

export type ValidFields = {
  name: string;
  date: string;
  eye: string;
  age: string;
  messengers: string[];
  gender: string[];
  image: Blob | MediaSource;
};
export type FormProps = DetailedHTMLProps<InputHTMLAttributes<HTMLFormElement>, HTMLFormElement> &
  SetDataState;
