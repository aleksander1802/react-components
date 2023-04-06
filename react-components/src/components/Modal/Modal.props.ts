import { DetailedHTMLProps } from 'react';

type ModalProps = {
  show: boolean;
  onCloseButtonClick: () => void;
  children?: React.ReactNode;
};

export type IModalProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  ModalProps;
