import { LayoutComponent } from 'Components/Layout/Layout';
import styles from './All.module.scss'

export const All = () => {
  return (
    <LayoutComponent>
      <h1 className={styles.head}>All Pages</h1>
    </LayoutComponent>
  )
}