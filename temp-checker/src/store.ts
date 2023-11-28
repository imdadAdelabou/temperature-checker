// store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user.slice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
