import { configureStore } from '@reduxjs/toolkit';
import {offerSlice} from '../store/slices/offerSlice';

export const store = configureStore({
  reducer : {
    [offerSlice.name] : offerSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
