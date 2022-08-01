import {
  useForm,
  DeepRequired,
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegisterReturn
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
    pattern: { value: /^\S+@\S+$/i, message: t('errorMessages.email') }
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
