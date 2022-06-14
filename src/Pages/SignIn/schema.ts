import { REQUIRED } from 'Shared/Constants/schema';
import * as yup from 'yup';

const stringRequired = yup.string().required(REQUIRED);

const signInSchema = yup.object({
  login: stringRequired,
  password: stringRequired
})

export { signInSchema }