import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import  authReducer  from './auth/authSlice';
import favouriteSlice from './favourite/favouriteSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products:productSlice,
    auth:authReducer,
    favourite:favouriteSlice

  },
});
