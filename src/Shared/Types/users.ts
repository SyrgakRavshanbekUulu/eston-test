export interface IUsers {
  login: string
  password: string
  userType: 'common' | 'admin'
}

export interface SignInType extends Omit<IUsers, 'userType'> { }

export interface IError {
  error: boolean,
  message: string
}

export interface UsersInitialState {
  users: IUsers[],
  loading: boolean,
  error: IError,
  currentUser: IUsers
}
