import { matchPath } from 'react-router'
import { routeArray, routeMap } from 'routes'
import { RouteData, userTypes } from 'Shared/Types/routes'

const matches = (url: string, path: string) => {
  return matchPath(url, path) != null
}

export const hasMatch = (url: string): boolean => {
  return routeMap.has(url) && routeArray.some((route) => matches(url, route.path))
}

export const hasAccess = (url: string, userType: userTypes) => {
  const checkRoute = (route: RouteData) => {
    return route?.userType?.some((item) => userType === item)
  }
  return routeMap.has(url) ?
    checkRoute(routeMap.get(url) as RouteData) :
    routeArray.some((r) => checkRoute(r) && matches(url, r.path))
}