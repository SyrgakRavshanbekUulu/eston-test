import { UsersInitialState } from 'Shared/Types/users';

const initialState: UsersInitialState = {
  users: [],
  loading: false,
  error: {
    error: false,
    message: ''
  },
  currentUser: {
    login: '',
    password: '',
    userType: 'common'
  }
}

export { initialState }