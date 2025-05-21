import { useState } from 'react'
import { type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import useValidateLoginForm from '../../hooks/login/useValidateLoginForm.hook'
import {
  type LoginRequest,
  useLoginMutation,
} from '../../services/auth.service'

const Login = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const [serverErrorState, setServerErrorState] = useState<string>('')

  const { emailRegister, passwordRegister, handleSubmit, errors } =
    useValidateLoginForm()

  const onSubmit: SubmitHandler<LoginRequest> = async (data: LoginRequest) => {
    try {
      await login(data).unwrap()
      navigate('/')
    } catch (err: unknown) {
      setServerErrorState(
        (err as { data: { error: { description: string } } }).data.error
          .description,
      )
    }
  }

  return (
    <>
      <div>
        <input {...emailRegister} type='text' placeholder='Enter Email' />
        <br />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <input
          {...passwordRegister}
          type='password'
          placeholder='Enter Password'
        />
        <br />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      {serverErrorState && <div>{serverErrorState}</div>}
      <div>
        {isLoading ? (
          'Loading ...'
        ) : (
          <button onClick={handleSubmit(onSubmit)}>Login</button>
        )}
      </div>
    </>
  )
}

export default Login
