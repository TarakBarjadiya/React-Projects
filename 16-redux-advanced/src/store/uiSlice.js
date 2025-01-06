import { createSlice } from '@reduxjs/toolkit';

const uiInitialValue = { isVisible: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialValue,
  reducers: {
    toggleVisible(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
