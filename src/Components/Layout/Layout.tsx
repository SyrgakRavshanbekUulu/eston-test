import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { LayoutComponentProps } from './Layout.type'
import { HeaderComponent } from 'Components/Header/Header'
import cn from 'classnames'
import styles from './Layout.module.scss'

export const LayoutComponent = ({
  children,
  className
}: LayoutComponentProps) => {
  return (
    <Layout>
      <HeaderComponent isActive={false} />
      <Content className={cn(styles.content, className)}>
        {children}
      </Content>
    </Layout>
  )
}