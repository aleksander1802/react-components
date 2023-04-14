import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import MainPage from './MainPage';
import store from '../../store/store';
describe('MainPage', () => {
  it('should render Cards component', () => {
    const mockCards = [
      {
        id: '1',
        urls: { small: 'test-url' },
        alt_description: 'test-alt',
        user: { name: 'test-name' },
      },
      {
        id: '2',
        urls: { small: 'test-url' },
        alt_description: 'test-alt',
        user: { name: 'test-name' },
      },
      {
        id: '3',
        urls: { small: 'test-url' },
        alt_description: 'test-alt',
        user: { name: 'test-name' },
      },
    ];

    const { getByLabelText } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    setTimeout(() => {
      const cardsList = getByLabelText('cards');
      const cardsItems = cardsList.getElementsByTagName('li');

      expect(cardsItems.length).toEqual(mockCards.length);
    }, 2000);
  });
});
