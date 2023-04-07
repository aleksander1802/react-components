import { IModalProps } from './Modal.props';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

export const Modal = ({ show, onCloseButtonClick, children }: IModalProps) => {
  if (!show) {
    return null;
  }

  const portal = ReactDOM.createPortal(
    <div
      data-testid="modal-overlay"
      className={styles.overlay}
      onClick={(e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === e.currentTarget) {
          onCloseButtonClick();
        }
      }}
    >
      {children}
    </div>,
    document.body
  );
  return portal;
};
