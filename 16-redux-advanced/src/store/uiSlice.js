import { createSlice } from '@reduxjs/toolkit';

const uiInitialValue = { isVisible: false, notification: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialValue,
  reducers: {
    toggleVisible(state) {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
