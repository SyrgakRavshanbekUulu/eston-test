import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { signOut } from 'Shared/Utils/signOut'
import { HeaderProps } from './Header.type'
import styles from './Header.module.scss'

export const HeaderComponent = ({
  isActive
}: HeaderProps) => {
  return (
    <Header>
      <Menu
        mode='horizontal'
        theme='dark'
        className={styles.menu}
      >
        <Menu.Item key='all'>
          <NavLink to='/all'>All</NavLink>
        </Menu.Item>
        {isActive && <Menu.Item key='user2'>
          <NavLink to='/user2'>User 2 </NavLink>
        </Menu.Item>}
        <Menu.Item key='signOut' onClick={() => signOut()}>Sign out</Menu.Item>
      </Menu>
    </Header>
  )
}