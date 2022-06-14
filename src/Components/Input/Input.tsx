import { Input } from 'antd'
import { Controller } from 'react-hook-form'
import { InputType } from './Input.type'
import styles from './Input.module.scss'

export const InputComponent = ({
  control,
  name,
  ...props
}: InputType) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return <>
          <Input
            onChange={(e) => field.onChange(e)}
            value={field.value}
            {...props}
          />
          {fieldState.error && <label className={styles.error}>{fieldState.error.message}</label>}
        </>
      }}
    />
  )
}