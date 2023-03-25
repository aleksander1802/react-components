import { ValidCardFields } from './CardsForm.props';
import { Component } from 'react';
import { ValidFields } from '../../components/AddCardForm/AddCardForm.props';

import cn from 'classnames';
import styles from './CardsForm.module.css';
export class CardsForm extends Component<ValidCardFields> {
  renderItems = (arr: ValidFields[]) => {
    const items = arr.map((item, id) => {
      return (
        <li key={id} className={styles.card}>
          <img className={styles.image} src={URL.createObjectURL(item.image)} alt={item.name} />
          <div className={styles.name}>
            Name: <span>{item.name}</span>
          </div>
          <div>
            Birthday: <span>{item.date}</span>
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
              {item.messengers.map((m) => {
                return (
                  <>
                    <span>{m}</span>
                  </>
                );
              })}
            </span>
          </div>
          <div>
            Gender:{' '}
            <span>
              {item.gender[0] === '1'
                ? 'Male'
                : item.gender[0] === '2'
                ? 'Female'
                : 'Optimus Prime'}
            </span>
          </div>
        </li>
      );
    });

    return <ul className={styles.wrapper}>{items}</ul>;
  };

  render() {
    const items = this.renderItems(this.props.data);

    return <div className={styles.cards}>{items}</div>;
  }
}
