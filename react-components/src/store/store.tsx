import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../components/Cards/cardsSlice';
import searchReducer from '../components/Search/searchSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: {
    allCards: cardsReducer,
    searchValue: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
