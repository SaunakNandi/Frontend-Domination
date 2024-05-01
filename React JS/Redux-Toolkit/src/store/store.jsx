import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice'
// this is the global store
export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
})