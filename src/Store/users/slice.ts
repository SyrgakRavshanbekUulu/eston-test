import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, IUsers } from 'Shared/Types/users';
import { initialState } from './initialState';
import { getAllUsers } from './reducers';

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    currentUser: (state, action: PayloadAction<IUsers>) => {
      state.currentUser = action.payload
    },
    setError: (state, action: PayloadAction<IError>) => {
      state.error = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.error = {
        error: false,
        message: ''
      }
    });
    builder.addCase(getAllUsers.fulfilled, (state, actoin) => {
      state.loading = false;
      state.error = {
        error: false,
        message: ''
      };
      state.users = actoin.payload
    })
  }
})

export default slice;