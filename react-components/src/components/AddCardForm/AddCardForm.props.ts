import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type SetDataState = {
  setDataState: (data: ValidFields) => void;
};

export type ValidFields = {
  name: string;
  date: string;
  eye: string;
  age: string;
  messengers: string | string[];
  gender: string;
  image: string;
};

export type ValidFieldsFileList = {
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
