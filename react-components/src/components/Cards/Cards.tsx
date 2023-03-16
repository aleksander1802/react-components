import { CardsProps } from './Cards.props';
import { Component } from 'react';
import { cards } from '../../api/cards';

import styles from './Cards.module.css';

export class Cards extends Component {
  state = {
    cardsList: [],
    loading: true,
  };

  componentDidMount() {
    this.onCardsListLoaded(cards);
  }

  onCardsListLoaded = (cardsList: CardsProps[]) => {
    this.setState({
      cardsList: [...cardsList],
      loading: false,
    });
  };

  renderItems(arr: CardsProps[]) {
    const items = arr.map((item) => {
      return (
        <li className={styles.card} key={item._id}>
          <img src={item.url} alt={item.name} />
          <div className={styles.name}>{item.name}</div>
        </li>
      );
    });

    return <ul className={styles.wrapper}>{items}</ul>;
  }

  render() {
    const { cardsList, loading } = this.state;

    const items = this.renderItems(cardsList);
    const content = !loading ? items : null;
    return <div className={styles.cards}>{content}</div>;
  }
}
