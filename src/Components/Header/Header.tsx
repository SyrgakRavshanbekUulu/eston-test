import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { HeaderProps } from './Header.type'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { signOut } from 'Shared/Utils/signOut'

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
          <NavLink to='/user2'>All</NavLink>
        </Menu.Item>}
        <Menu.Item key='signOut' onClick={() => signOut()}>Sign out</Menu.Item>
      </Menu>
    </Header>
  )
}