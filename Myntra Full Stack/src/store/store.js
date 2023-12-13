import { configureStore } from '@reduxjs/toolkit'
import itemReducers from '../features/items/itemSlice'
import bagReducers from '../features/bag/bagSlice'
// import reduxLogger from 'redux-logger'

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer:{
    item: itemReducers,
    bag: bagReducers,
  },
  //middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

export default store