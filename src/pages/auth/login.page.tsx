import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ILoginRequest, useLoginMutation } from '../../services/auth.service'

const Login = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const [formState, setFormState] = useState<ILoginRequest>({
    email: '',
    password: ''
  })

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

  const handleClick = async () => {
    try {
      await login(formState).unwrap()
      navigate('/')
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log('rejected', err)
    }
  }

  return (
    <>
      <div>
        <input
          onChange={handleChange}
          name='email'
          type='text'
          placeholder='Enter Email'
        />
      </div>
      <div>
        <input
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='Enter Password'
        />
      </div>
      <div>
        {isLoading ? (
          'Loading ...'
        ) : (
          <button onClick={handleClick}>Login</button>
        )}
      </div>
    </>
  )
}

export default Login
