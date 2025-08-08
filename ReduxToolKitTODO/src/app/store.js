import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../features/TODO/todoSlice'


export const store = configureStore({
    reducer:todoReducers
})


