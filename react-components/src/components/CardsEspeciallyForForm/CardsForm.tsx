import { FormCard } from '../../components/AddCardForm/AddCardForm.props';
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
          <img className={styles.image} src={item.image} alt={item.name} aria-label="spanImage" />
          <div className={styles.name}>
            Name: <span aria-label="spanName">{item.name.slice(0, 10)}</span>
          </div>
          <div>
            Birthday:{' '}
            <span aria-label="spanBirthday">{new Date(item.date).toLocaleDateString('en-GB')}</span>
          </div>
          <div>
            Age:{' '}
            <span className={styles.age} aria-label="spanAge">
              {item.age}
            </span>
          </div>
          <div>
            Eye color:{' '}
            <span
              className={cn(styles.eye, {
                [styles.green]: item.eye === 'green',
                [styles.brown]: item.eye === 'brown',
                [styles.blue]: item.eye === 'blue',
              })}
              aria-label="spanEyeColor"
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
                      <span aria-label="spanMessenger">{m}</span>
                    </React.Fragment>
                  );
                })
              )}
            </span>
          </div>
          <div>
            Gender: <span aria-label="spanGender">{item.gender}</span>
          </div>
        </li>
      );
    });

    return (
      <ul className={styles.wrapper} aria-label="cardForm">
        {items}
      </ul>
    );
  };

  const items = form && renderItems(form);

  return (
    <div className={styles.cards} aria-label="cards">
      {items}
    </div>
  );
};
