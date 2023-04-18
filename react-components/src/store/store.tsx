import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../components/Cards/cardsSlice';
import searchReducer from '../components/Search/searchSlice';
import formReducer from '../components/CardsEspeciallyForForm/formSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: {
    allCards: cardsReducer,
    searchValue: searchReducer,
    form: formReducer,
  },
});

export default store;
