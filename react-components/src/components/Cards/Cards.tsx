import styles from './Cards.module.css';
import { useState, useEffect } from 'react';
import APIService from '../../services/APIService';
import { ICards, CardsPropsAPI } from './Cards.props';
import { Modal } from '../../components/Modal/Modal';
import { Card } from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import useModal from '../../hooks/modal.hook';

export const Cards = ({ query }: CardsPropsAPI) => {
  const initialCardsList: ICards[] = [];
  const initialLoading = false;

  const [cardsList, setCardsList] = useState(initialCardsList);
  const [currentID, setCurrentID] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(initialLoading);
  const [isShowingModal, toggleModal] = useModal();

  useEffect(() => {
    if (query !== '') {
      setLoading(false);
      APIService()
        .searchPhotos(query)
        .then((data) => {
          setCardsList(data);
        })
        .then(() => setLoading(true));
    } else {
      APIService()
        .getAllPhotos()
        .then((data) => setCardsList(data))
        .then(() => setLoading(true));
    }
  }, [query]);

  const renderItems = (arr: ICards[]) => {
    const limitPerPage = 8;
    arr.length = limitPerPage;
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

  const items = cardsList.length === 0 ? <NothingFound /> : renderItems(cardsList);
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
