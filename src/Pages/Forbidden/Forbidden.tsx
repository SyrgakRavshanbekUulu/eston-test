import { LayoutComponent } from 'Components/Layout/Layout';
import styles from './Forbidden.module.scss'

export const Forbidden = () => {
  return (
    <LayoutComponent>
      <h1 className={styles.head}>403 Forbidden</h1>
    </LayoutComponent>
  )
}