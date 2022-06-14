import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'Service/api/api';

const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async () => {
    const response = await api.users.getUser()
    return response.data;
  }
);
export { getAllUsers };