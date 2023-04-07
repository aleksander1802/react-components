import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';
import { vi } from 'vitest';

describe('Modal', () => {
  const handleClose = vi.fn();

  it('renders nothing when show prop is false', () => {
    render(
      <Modal show={false} onCloseButtonClick={handleClose}>
        Content
      </Modal>
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('renders children and overlay when show prop is true', () => {
    render(
      <Modal show={true} onCloseButtonClick={handleClose}>
        Content
      </Modal>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
  });

  it('calls onCloseButtonClick when overlay is clicked', () => {
    render(
      <Modal show={true} onCloseButtonClick={handleClose}>
        Content
      </Modal>
    );
    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
