import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import  authReducer  from './auth/authSlice';
import favouriteSlice from './favourite/favouriteSlice';
import  discountSlice  from './offers/offersSlice';


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products:productSlice,
    auth:authReducer,
    favourite:favouriteSlice,
    discounts:discountSlice,

  },
});
