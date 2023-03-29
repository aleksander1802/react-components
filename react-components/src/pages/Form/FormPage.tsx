import { ValidFields } from '../../components/AddCardForm/AddCardForm.props';
import { useState } from 'react';

import { AddCardForm } from '../../components/AddCardForm/AddCardForm';
import { CardsForm } from '../../components/CardsEspeciallyForForm/CardsForm';

export const FormPage = () => {
  const initialCardsArray: ValidFields[] = [];
  const [cardsArray, setCardsArray] = useState(initialCardsArray);

  const setDataState = (data: ValidFields) => {
    setCardsArray((prevData) => [...prevData, data]);
  };

  return (
    <>
      <AddCardForm setDataState={setDataState} />
      <CardsForm data={cardsArray} />
    </>
  );
};
