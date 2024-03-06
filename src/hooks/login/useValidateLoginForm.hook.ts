import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegisterReturn,
  useForm
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ILoginRequest } from '../../services/auth.service'

export default (): {
  emailRegister: UseFormRegisterReturn<'email'>
  passwordRegister: UseFormRegisterReturn<'password'>
  handleSubmit: UseFormHandleSubmit<ILoginRequest>
  errors: FieldErrorsImpl<DeepRequired<ILoginRequest>>
} => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginRequest>({ mode: 'all' })

  const emailRegister = register('email', {
    required: t('errorMessages.required', { field: t('email') }),
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      message: t('errorMessages.email')
    }
  })

  const passwordRegister = register('password', {
    required: t('errorMessages.required', { field: t('password') })
  })

  return {
    emailRegister,
    passwordRegister,
    handleSubmit,
    errors
  }
}
