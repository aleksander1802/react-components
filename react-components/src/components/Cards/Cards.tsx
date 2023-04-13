import styles from './Cards.module.css';
import { useState, useEffect } from 'react';

import { ICards } from './Cards.props';
import { Modal } from '../../components/Modal/Modal';
import { Card } from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import useModal from '../../hooks/modal.hook';

import { fetchCards } from './cardsSlice';

import { useAppSelector, useAppDispatch } from '../../hooks/dispatch.hook';
export const Cards = () => {
  const cards = useAppSelector((state) => state.allCards.cards);
  const loading = useAppSelector((state) => state.allCards.loading);
  const search = useAppSelector((state) => state.searchValue.search);

  const [currentID, setCurrentID] = useState<string | null>(null);
  const [isShowingModal, toggleModal] = useModal();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards(search));
  }, [dispatch, search]);

  const renderItems = (arr: ICards[]) => {
    const items = arr.map((item) => {
      return (
        <li
          className={styles.card}
          key={item.id}
          onClick={() => {
            toggleModal();
            setCurrentID(item.id);
          }}
        >
          <div className={styles.image}>
            <img src={item.urls.small} alt={item.alt_description ?? item.user.name} />
          </div>
          <div className={styles.name}>
            <span>{item.user.name}</span>
          </div>
        </li>
      );
    });

    return (
      <ul aria-label="cards" className={styles.wrapper}>
        {items}
      </ul>
    );
  };

  const NothingFound = () => {
    return (
      <div className={styles.nothing}>
        <span>It looks like nothing was found...</span>
      </div>
    );
  };

  const items = cards.length === 0 ? <NothingFound /> : renderItems(cards);
  const loaded = !loading ? <Spinner /> : null;
  const content = loading ? items : null;

  return (
    <div className={styles.cards}>
      {loaded}
      {content}
      <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
        <Card id={currentID!} closeModal={toggleModal} />
      </Modal>
    </div>
  );
};
