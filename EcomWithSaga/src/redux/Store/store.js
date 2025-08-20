import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Slice/cartSlice'
import productSaga from '../Saga/productSaga'
import createSagaMiddleware from 'redux-saga';



const sagaMiddleware = createSagaMiddleware();  



export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: ()=> [sagaMiddleware],

})