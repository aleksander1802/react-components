import { Component } from 'react';
import { ValidFields } from '../../components/AddCardForm/AddCardForm.props';

import { AddCardForm } from '../../components/AddCardForm/AddCardForm';
import { CardsForm } from '../../components/CardsEspeciallyForForm/CardsForm';

export class FormPage extends Component {
  state = {
    cardsArray: [],
  };

  setDataState = (data: ValidFields[]) => {
    this.setState({
      cardsArray: data,
    });
  };
  render() {
    return (
      <>
        <AddCardForm setDataState={this.setDataState} />
        <CardsForm data={this.state.cardsArray} />
      </>
    );
  }
}
