import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchValue } from './Search.props';

const initialState: SearchValue = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
