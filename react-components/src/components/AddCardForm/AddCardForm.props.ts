import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export type SetDataState = {
  setDataState: (data: ValidFields) => void;
};

export type ValidFields = {
  name: string;
  date: string;
  eye: string;
  age: string;
  messengers: string[];
  gender: string;
  image: FileList;
};

export type FormProps = DetailedHTMLProps<InputHTMLAttributes<HTMLFormElement>, HTMLFormElement> &
  SetDataState;
