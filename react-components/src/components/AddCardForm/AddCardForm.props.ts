import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type SetDataState = {
  setDataState: (data: FormCard) => void;
};

export type FormCard = {
  name: string;
  date: string;
  eye: string;
  age: string;
  messengers: string | string[];
  gender: string;
  image: string;
};

export type FormFields = {
  name: string;
  date: string;
  eye: string;
  age: string;
  messengers: string | string[];
  gender: string;
  image: FileList;
};

export type FormProps = DetailedHTMLProps<InputHTMLAttributes<HTMLFormElement>, HTMLFormElement> &
  SetDataState;
