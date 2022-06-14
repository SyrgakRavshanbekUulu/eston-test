import { Location } from 'react-router';
import { hasAccess, hasMatch } from 'route-utils';
import { clearAll, read } from 'Service/storage';
import { userTypes } from 'Shared/Types/routes';

export const checkUrl = ({ pathname }: Location) => {
  const userType = read('userType')
  const notFound = !hasMatch(pathname);

  if (!userType) {
    clearAll();
    if (pathname === '/signIn') return;
    return '/signIn'
  }

  if (pathname === '/forbidden') return

  if (notFound) return '/not-found'

  const forbidden = !hasAccess(pathname, (userType || userTypes.COMMON) as userTypes)

  if (forbidden) return '/forbidden'
}
