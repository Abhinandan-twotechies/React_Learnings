import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Slice/cartSlice'
import productSaga from '../Saga/productSaga'



export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

})