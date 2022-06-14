import { InputProps } from 'antd';
import { Control } from 'react-hook-form';

export interface InputType extends InputProps {
  control: Control<any>,
  name: string
}