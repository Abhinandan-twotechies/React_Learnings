import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Slice/cartSlice'
import catsSaga from '../Saga/catsSaga'
import createSagaMiddleware from 'redux-saga';



const sagaMiddleware = createSagaMiddleware();  



export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: ()=> [sagaMiddleware],

})

sagaMiddleware.run(catsSaga); // Run the saga middleware