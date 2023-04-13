import { FormCard } from '../../components/AddCardForm/AddCardForm.props';
import { transformDate } from './dateTransform';
import React from 'react';
import cn from 'classnames';
import styles from './CardsForm.module.css';
import { useAppSelector } from '../../hooks/dispatch.hook';

export const CardsForm = () => {
  const form = useAppSelector((state) => state.form);

  const renderItems = (arr: FormCard[]) => {
    const items = arr.map((item, id) => {
      return (
        <li key={id} className={styles.card}>
          <img className={styles.image} src={item.image} alt={item.name} />
          <div className={styles.name}>
            Name: <span>{item.name.length > 11 ? `${item.name}...` : item.name}</span>
          </div>
          <div>
            Birthday: <span>{transformDate(item.date)}</span>
          </div>
          <div>
            Age: <span className={styles.age}>{item.age}</span>
          </div>
          <div>
            Eye color:{' '}
            <span
              className={cn(styles.eye, {
                [styles.green]: item.eye === 'green',
                [styles.brown]: item.eye === 'brown',
                [styles.blue]: item.eye === 'blue',
              })}
            >
              {item.eye}
            </span>
          </div>
          <div>
            Favorite messengers:{' '}
            <span className={styles.messengers}>
              {typeof item.messengers === 'string' ? (
                <span>{item.messengers}</span>
              ) : (
                item.messengers.map((m) => {
                  return (
                    <React.Fragment key={m}>
                      <span>{m}</span>
                    </React.Fragment>
                  );
                })
              )}
            </span>
          </div>
          <div>
            Gender: <span>{item.gender}</span>
          </div>
        </li>
      );
    });

    return <ul className={styles.wrapper}>{items}</ul>;
  };

  const items = form && renderItems(form);

  return <div className={styles.cards}>{items}</div>;
};
