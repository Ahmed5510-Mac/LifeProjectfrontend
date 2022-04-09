import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products:productSlice
  },
});
