import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const titleHandle = (data: string) => {
  switch (data) {
    case '/':
      return 'Main';
    case '/about':
      return 'About Us';
    case '/form':
      return 'Create card';
    default:
      return '';
  }
};
const headerSlice = createSlice({
  name: 'header',
  initialState: {
    title: '',
  },
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      {
        state.title = action.payload;
      }
    },
  },
});

export const { setTitle } = headerSlice.actions;

export default headerSlice.reducer;
