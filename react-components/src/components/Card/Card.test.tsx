// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import APIService from 'services/APIService';
// import { Card } from './Card';
// import { vi } from 'vitest';

// vi.mock('../path/to/APIService');

// describe('Card component', () => {
//   const mockCard = {
//     id: '123',
//     urls: {
//       small: 'http://example.com/image.jpg',
//     },
//     alt_description: 'An example image',
//     user: {
//       username: 'exampleuser',
//       name: 'John Doe',
//       total_likes: 100,
//       for_hire: true,
//       total_photos: 50,
//       total_collections: 10,
//       created_at: '2022-01-01T00:00:00Z',
//     },
//   };

//   it('renders loading spinner initially', async () => {
//     // Replace implementation of getSinglePhoto with a mock function
//     vi.spyOn(APIService.prototype, 'getSinglePhoto').mockImplementation(
//       () => new Promise(() => {})
//     );

//     render(<Card id={mockCard.id} closeModal={vi.fn()} />);

//     const spinner = screen.getByTestId('spinner');
//     expect(spinner).toBeInTheDocument();
//   });

//   it('renders card with correct data after loading', async () => {
//     // Replace implementation of getSinglePhoto with a mock function that returns mock data
//     vi.spyOn(APIService.prototype, 'getSinglePhoto').mockResolvedValue(mockCard);

//     render(<Card id={mockCard.id} closeModal={vi.fn()} />);

//     const spinner = screen.getByTestId('spinner');
//     expect(spinner).toBeInTheDocument();

//     // Wait for loading to finish
//     await screen.findByText('Nickname:');

//     const closeButton = screen.getByLabelText('close');
//     expect(closeButton).toBeInTheDocument();

//     const image = screen.getByAltText(mockCard.alt_description);
//     expect(image).toBeInTheDocument();
//     expect(image.getAttribute('src')).toBe(mockCard.urls.small);

//     expect(screen.getByText(`Nickname: ${mockCard.user.username}`)).toBeInTheDocument();
//     expect(screen.getByText(`Real name: ${mockCard.user.name}`)).toBeInTheDocument();
//     expect(screen.getByText(`Total likes: ${mockCard.user.total_likes}`)).toBeInTheDocument();
//     expect(screen.getByText(`Looking for a relationship: Yep`)).toBeInTheDocument();
//     expect(screen.getByText(`Total photos: ${mockCard.user.total_photos}`)).toBeInTheDocument();
//     expect(
//       screen.getByText(`Total collections: ${mockCard.user.total_collections}`)
//     ).toBeInTheDocument();
//     expect(
//       screen.getByText(
//         `Profile created: ${new Date(mockCard.user.created_at).toLocaleDateString('en-GB')}`
//       )
//     ).toBeInTheDocument();

//     userEvent.click(closeButton);
//     expect(vi.fn()).toHaveBeenCalled();

//     // Restore original implementation of getSinglePhoto
//     vi.restoreAllMocks();
//   });
// });

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';
import { vi } from 'vitest';

describe('Card', () => {
  const mockCard = {
    id: '123',
    urls: { small: 'https://example.com/image.jpg' },
    user: {
      username: 'johndoe',
      name: 'John Doe',
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
