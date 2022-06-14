import { RootState } from 'Store/store';

const selectAllUsers = (state: RootState) => {
  return state.users.users;
}

const selectAllUsersLoading = (state: RootState) => {
  return state.users.loading;
}

const selectAllUsersError = (state: RootState) => {
  return state.users.error;
}

const selectCurrentUser = (state: RootState) => {
  return state.users.currentUser;
}

export {
  selectAllUsers,
  selectAllUsersLoading,
  selectAllUsersError,
  selectCurrentUser
}