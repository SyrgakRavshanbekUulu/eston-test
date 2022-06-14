import * as pages from 'Pages/index';
import { RouteData, userTypes } from 'Shared/Types/routes';

export const routeMap = new Map<string, RouteData>()
  .set('/all', {
    page: pages.All,
    userType: [userTypes.COMMON]
  })
  .set('/user2', {
    page: pages.User2,
    userType: [userTypes.ADMIN]
  })
  .set('/signIn', {
    page: pages.SignIn,
    userType: [userTypes.COMMON, userTypes.ADMIN],
  })
  .set('/not-found', {
    page: pages.All,
    userType: [userTypes.COMMON, userTypes.ADMIN]
  })
  .set('/forbidden', {
    page: pages.All,
    userType: [userTypes.COMMON, userTypes.ADMIN]
  })
  .set('/', {
    page: pages.All,
    userType: [userTypes.COMMON, userTypes.ADMIN]
  });

export const routeArray = Array.from(routeMap).map(([path, r]) => ({ ...r, path }))
