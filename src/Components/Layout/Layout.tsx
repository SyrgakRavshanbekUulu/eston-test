import { useSelector } from 'react-redux'
import cn from 'classnames'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { HeaderComponent } from 'Components/Header/Header'
import { selectCurrentUser } from 'Store/users/selectors'
import { userTypes } from 'Shared/Types/routes'
import { LayoutComponentProps } from './Layout.type'
import styles from './Layout.module.scss'

export const LayoutComponent = ({
  children,
  className,
  withOutHeader
}: LayoutComponentProps) => {
  const user = useSelector(selectCurrentUser);
  const isActive = user.userType === userTypes.ADMIN
  console.log(user.userType, userTypes.ADMIN)
  return (
    <Layout>
      {!withOutHeader && <HeaderComponent isActive={isActive} />}
      <Content className={cn(styles.content, className)}>
        {children}
      </Content>
    </Layout>
  )
}