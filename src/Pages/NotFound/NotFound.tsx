import { LayoutComponent } from 'Components/Layout/Layout';
import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <LayoutComponent>
      <h1 className={styles.head}>404 Not Found</h1>
    </LayoutComponent>
  )
}