import { UserOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { LayoutComponent } from 'Components/Layout/Layout'
import { useForm } from 'react-hook-form'
import { IUsers, SignInType } from 'Shared/Types/users'
import styles from './SignIn.module.scss'
import { signInSchema } from './schema'
import { HEADER, SENT, UNCORRECT_LOGIN_OR_PASSWORD } from 'Shared/Constants/signIn'
import { InputComponent } from 'Components/Input/Input'
import { useSelector } from 'react-redux'
import { selectAllUsers, selectAllUsersError, selectAllUsersLoading } from 'Store/users/selectors'
import { useAppDispatch } from 'Store/store'
import { currentUser, setError } from 'Store/users/actions'
import { write } from 'Service/storage'
import { useNavigate } from 'react-router'



export const SignIn = () => {
  const users = useSelector(selectAllUsers);
  const userError = useSelector(selectAllUsersError);
  const dispatch = useAppDispatch();
  const navigete = useNavigate()
  const { control, handleSubmit } = useForm<SignInType>({
    resolver: yupResolver(signInSchema),
    mode: 'onChange'
  })


  const onSubmit = (data: SignInType) => {
    const user = users.find((user) => user.login === data.login && user.password === data.password);
    if (user) {
      dispatch(currentUser(user))
      dispatch(setError({
        error: false,
        message: ''
      }))
      Object.entries(user).forEach(([key, value]) => write(key, value));
      navigete('/all');
    } else {
      dispatch(currentUser({
        login: '',
        password: '',
        userType: 'common'
      }))
      dispatch(setError({
        error: true,
        message: UNCORRECT_LOGIN_OR_PASSWORD
      }))
    }
  }


  return (
    <LayoutComponent >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.wrapper}
      >
        <h1>{HEADER}</h1>
        <Row
          justify='center'
          gutter={[16, 16]}
        >
          <Col xs={20}>
            <InputComponent
              size='large'
              placeholder='login'
              prefix={<UserOutlined />}
              control={control}
              name='login'
            />
          </Col>
          <Col xs={20}>
            <InputComponent
              size='large'
              placeholder='password'
              prefix={<UserOutlined />}
              control={control}
              name='password'
            />
          </Col>
          {userError.error && <Col xs={20}>
            <label className={styles.error}>
              {userError.message}
            </label>
          </Col>}
          <Col>
            <Button
              type='primary'
              htmlType='submit'
            > {SENT}
            </Button>
          </Col>
        </Row>
      </form>
    </LayoutComponent >
  )
}