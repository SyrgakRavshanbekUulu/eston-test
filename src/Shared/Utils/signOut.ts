import { clearAll } from 'Service/storage'

export const signOut = () => {
  clearAll();
  window.location.href = '/signIn'
}