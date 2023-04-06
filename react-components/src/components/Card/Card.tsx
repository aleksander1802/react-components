import cn from 'classnames';
import styles from './Card.module.css';
import { useState, useEffect } from 'react';
import APIService from '../../services/APIService';
import { ICard, CardPropsAPI } from './Card.props';

import Spinner from '../Spinner/Spinner';

export const Card = ({ id }: CardPropsAPI) => {
  const initialLoading = false;

  const [card, setCard] = useState<ICard | null>(null);
  const [loading, setLoading] = useState<boolean>(initialLoading);

  useEffect(() => {
    console.log('id');

    // APIService()
    //   .getSinglePhoto(id)
    //   .then((data) => {
    //     setCard(data);
    //     localStorage.setItem('lotos', JSON.stringify(data));
    //   })
    //   .then(() => setLoading(true));
    setCard(JSON.parse(localStorage.getItem('lotos')!));
    setLoading(true);
  }, [id]);

  const renderItems = (arr: ICard) => {
    const items = (
      <li className={styles.card} key={arr.id}>
        <div className={styles.image}>
          <img src={arr.urls.small} alt={arr.alt_description ?? arr.user.name} />
        </div>
        <div className={styles.name}>
          <span>{arr.user.name}</span>
        </div>
        {/* <div>
            Age: <span className={styles.age}>{item.age}</span>
          </div>
          <div>
            Eye color:{' '}
            <span
              className={cn(styles.eye, {
                [styles.green]: item.eyeColor === 'green',
                [styles.brown]: item.eyeColor === 'brown',
                [styles.blue]: item.eyeColor === 'blue',
              })}
            >
              {item.eyeColor}
            </span>
          </div>
          <div>
            Looking for a relationship:{' '}
            <span
              className={cn(styles.choice, {
                [styles.active]: item.isActive,
                [styles.notactive]: !item.isActive,
              })}
            >
              {item.isActive ? 'Yep' : 'Nope'}
            </span>
          </div>
          <div>
            Bank account: <span className={styles.balance}>{item.balance}</span>
          </div>
          <div>
            Email: <span>{item.email}</span>
          </div>
          <div>
            Phone: <span>{item.phone}</span>
          </div> */}
      </li>
    );

    return (
      <ul aria-label="cards" className={styles.wrapper}>
        {items}
      </ul>
    );
  };

  const items = card && renderItems(card);
  const loaded = !loading ? <Spinner /> : null;
  const content = loading ? items : null;

  return (
    <div className={styles.cards}>
      {loaded}
      {content}
    </div>
  );
};
