import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userSlice from './users/slice';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  }
})

const useAppDispatch = () => useDispatch<AppDispatch>();

export type { RootState, AppDispatch };
export { store as default, useAppDispatch }