import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import cartSlice from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart : cartSlice
  },
});
