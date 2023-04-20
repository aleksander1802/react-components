import cn from 'classnames';
import styles from './Card.module.css';
import { useState, useEffect } from 'react';
import APIService from '../../services/APIService';
import { ICard, CardPropsAPI } from './Card.props';
import { Button } from '../../components/Button/Button';
import CloseIcon from './close_modal.svg';
import Spinner from '../Spinner/Spinner';

export const Card = ({ id, closeModal }: CardPropsAPI) => {
  const initialLoading = false;

  const [card, setCard] = useState<ICard | null>(null);
  const [loading, setLoading] = useState<boolean>(initialLoading);

  useEffect(() => {
    APIService()
      .getSinglePhoto(id)
      .then((data) => {
        setCard(data);
      })
      .then(() => setLoading(true));
  }, [id]);

  const renderItems = (arr: ICard) => {
    return (
      <div className={styles.card} data-testid="cardModal">
        <Button
          appearance="primary"
          className={styles.close}
          onClick={closeModal}
          aria-label="close"
        >
          <img src={CloseIcon} className={styles.closeModal}></img>
        </Button>
        <div className={styles.image} aria-label="modalImage">
          <img src={arr.urls.small} alt={arr.user.name} />
        </div>
        <div className={styles.name} aria-label="modalNickname">
          <span>Nickname:</span> <div className={styles.primary}>{arr.user.username}</div>
        </div>
        <div aria-label="modalName">
          <span>Real name:</span> <div className={styles.primary}>{arr.user.name}</div>
        </div>
        <div aria-label="modalAge">
          <span className={styles.age}>Total likes:</span>{' '}
          <div className={styles.primary}>{arr.user.total_likes}</div>
        </div>
        <div aria-label="modalRelationship">
          <span>Looking for a relationship: </span>
          <span
            className={cn(styles.choice, {
              [styles.active]: arr.user.for_hire,
              [styles.notactive]: !arr.user.for_hire,
            })}
          >
            {arr.user.for_hire ? 'Yep' : 'Nope'}
          </span>
        </div>
        <div aria-label="modalPhotos">
          <span>Total photos:</span> <div className={styles.primary}>{arr.user.total_photos}</div>
        </div>
        <div aria-label="modalCollections">
          <span>Total collections:</span>{' '}
          <div className={styles.primary}>{arr.user.total_collections}</div>
        </div>
        <div aria-label="modalCreate">
          <span>Profile created:</span>{' '}
          <span className={styles.primary}>
            {new Date(arr.created_at).toLocaleDateString('en-GB')}
          </span>
        </div>
      </div>
    );
  };

  const items = card && renderItems(card);
  const loaded = !loading ? <Spinner /> : null;
  const content = loading ? items : null;

  return (
    <div className={styles.wrapper}>
      {loaded}
      {content}
    </div>
  );
};
