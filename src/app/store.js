import { configureStore } from '@reduxjs/toolkit';
import sliderReduce from "../features/Slices/sliderSlice";
import productReducer from "../features/Slices/productSlice";
import cartReducer from "../features/Slices/cartSlice";
import authReducer from "../features/Slices/authSlice";


export const store = configureStore({
  reducer: {
    slider: sliderReduce,
    products: productReducer,
    cart: cartReducer,
    user: authReducer
  },
});
