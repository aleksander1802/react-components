import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormCard } from '../../components/AddCardForm/AddCardForm.props';

const initialState: FormCard[] = [];

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<FormCard>) => {
      state.push(action.payload);
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
