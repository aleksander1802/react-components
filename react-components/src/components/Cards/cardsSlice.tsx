import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import APIService from '../../services/APIService';
import { IInitialCards } from './Cards.props';

const initialState: IInitialCards = {
  cards: [],
  loading: false,
};

export const fetchCards = createAsyncThunk('cards/fetchCards', async (query: string) => {
  const { searchPhotos, getAllPhotos } = APIService();

  if (query === '') {
    return getAllPhotos();
  } else {
    return searchPhotos(query);
  }
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = true;
        state.cards = action.payload;
      })
      .addDefaultCase(() => {});
  },
});

export default cardsSlice.reducer;
