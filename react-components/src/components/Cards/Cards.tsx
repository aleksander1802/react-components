import { CardsProps } from './Cards.props';
import { cards } from '../../api/cards';
import cn from 'classnames';
import styles from './Cards.module.css';
import { useState, useEffect } from 'react';

export const Cards = () => {
  const initialCardsList: CardsProps[] = [];
  const initialLoading = true;

  const [cardsList, setCardsList] = useState(initialCardsList);
  const [loading, setLoading] = useState<boolean>(initialLoading);

  useEffect(() => {
    onCardsListLoaded(cards);
  }, []);

  const onCardsListLoaded = (cardsList: CardsProps[]) => {
    setCardsList([...cardsList]);
    setLoading(false);
  };

  const renderItems = (arr: CardsProps[]) => {
    const items = arr.map((item) => {
      return (
        <li className={styles.card} key={item._id}>
          <img loading="lazy" src={item.url} alt={item.name} className={styles.image} />
          <div className={styles.name}>
            Name: <span>{item.name}</span>
          </div>
          <div>
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

  const items = renderItems(cardsList);
  const content = !loading ? items : null;

  return <div className={styles.cards}>{content}</div>;
};
