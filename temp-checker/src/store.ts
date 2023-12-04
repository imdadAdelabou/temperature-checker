// store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user.slice';
import authSlice from './features/auth.slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
