import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Cards } from './Cards';
import store from '../../store/store';
import { vi } from 'vitest';

describe('Cards component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders the cards', () => {
    const cards = [
      {
        id: '1',
        created_at: new Date(),
        updated_at: new Date(),
        promoted_at: null,
        width: 100,
        height: 100,
        color: '#000000',
        blur_hash: 'abcdef',
        description: null,
        alt_description: 'Card description',
        urls: {
          small: 'http://example.com/card.png',
        },
        links: {
          self: 'http://example.com/card/1',
          html: 'http://example.com/card/1',
          download: 'http://example.com/card/1/download',
        },
        likes: 0,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: '',
        user: {
          id: '1',
          username: 'user1',
          name: 'User 1',
          portfolio_url: 'http://example.com/user1',
          bio: '',
          location: '',
          links: {
            self: 'http://example.com/user/1',
            html: 'http://example.com/user/1',
            photos: 'http://example.com/user/1/photos',
            likes: 'http://example.com/user/1/likes',
            portfolio: 'http://example.com/user/1/portfolio',
          },
          profile_image: {
            small: 'http://example.com/user1.png',
          },
          instagram_username: '',
          total_collections: 0,
          total_likes: 0,
          total_photos: 0,
          accepted_tos: false,
        },
      },
    ];

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    setTimeout(() => {
      expect(screen.queryByText('It looks like nothing was found...')).not.toBeInTheDocument();
      expect(screen.getAllByLabelText('cards')).toBeInTheDocument();
      expect(screen.getByText(cards[0].user.name)).toBeInTheDocument();
      expect(
        screen.getByAltText(cards[0].alt_description ?? cards[0].user.name)
      ).toBeInTheDocument();
    }, 2000);
  });

  it('renders "nothing found" message when there are no cards', () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    setTimeout(() => {
      expect(screen.getByText('It looks like nothing was found...')).toBeInTheDocument();
      expect(screen.queryByLabelText('cards')).not.toBeInTheDocument();
    }, 2000);
  });
});
