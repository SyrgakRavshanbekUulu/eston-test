export enum userTypes {
  COMMON = 'common',
  ADMIN = 'admin'
}

export interface RouteData {
  page: () => JSX.Element
  userType: userTypes[]
}