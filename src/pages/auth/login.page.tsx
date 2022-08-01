import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { ILoginRequest, useLoginMutation } from '../../services/auth.service'
import useValidateLoginForm from '../../hooks/login/useValidateLoginForm.hook'

const Login = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const [serverErrorState, setServerErrorState] = useState<string>('')

  const { emailRegister, passwordRegister, handleSubmit, errors } =
    useValidateLoginForm()

  const onSubmit: SubmitHandler<ILoginRequest> = async (
    data: ILoginRequest
  ) => {
    try {
      await login(data).unwrap()
      navigate('/')
    } catch (err: any) {
      setServerErrorState(err.data.error.description)
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
