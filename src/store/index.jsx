import { configureStore } from '@reduxjs/toolkit'
// import { userSlice } from './slices/user.slice'
import counterSlice from './slices/counter.slice'
import userSlice from './slices/user.slice'

export default configureStore({
  reducer: {
    user: userSlice,
    counter: counterSlice,
  }
})