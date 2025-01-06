import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice.js';
import cartReducer from './cartSlice.js';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;
