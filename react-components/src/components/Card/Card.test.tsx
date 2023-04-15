import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';
import { vi } from 'vitest';

describe('Card', () => {
  const mockCard = {
    id: '123',
    urls: { small: 'https://example.com/image.jpg' },
    user: {
      username: 'alex',
      name: 'Alex Rud',
      total_likes: 42,
      for_hire: false,
      total_photos: 10,
      total_collections: 5,
      created_at: '2022-04-01T00:00:00Z',
    },
  };

  beforeEach(() => {
    vi.spyOn(window, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify(mockCard), {
        status: 200,
        headers: { 'Content-type': 'application/json' },
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the loading spinner initially', async () => {
    render(<Card id={mockCard.id} closeModal={() => {}} />);
    expect(screen.getByRole('spinner')).toBeInTheDocument();
  });

  it('renders the card content after loading', async () => {
    render(<Card id={mockCard.id} closeModal={() => {}} />);
    await screen.findByText(mockCard.user.username);

    setTimeout(() => {
      expect(screen.getByText(mockCard.user.username)).toBeInTheDocument();
      expect(screen.getByText(mockCard.user.name)).toBeInTheDocument();
      expect(screen.getByText(/Total likes/i)).toHaveTextContent(
        `Total likes: ${mockCard.user.total_likes}`
      );

      expect(screen.getByText(/looking for a relationship/i)).toHaveTextContent('Nope');
      expect(screen.getByText(/total photos/i)).toHaveTextContent(`${mockCard.user.total_photos}`);
      expect(screen.getByText(/total collections/i)).toHaveTextContent(
        `${mockCard.user.total_collections}`
      );
      expect(screen.getByText(/profile created/i)).toHaveTextContent('04/01/2022');
    }, 2000);
  });

  it('calls the closeModal callback when the close button is clicked', async () => {
    const mockCloseModal = vi.fn();
    render(<Card id={mockCard.id} closeModal={mockCloseModal} />);
    await screen.findByText(mockCard.user.username);
    userEvent.click(screen.getByLabelText('close'));

    setTimeout(() => {
      expect(mockCloseModal).toHaveBeenCalled();
    }, 500);
  });
});
