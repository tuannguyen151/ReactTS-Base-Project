import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { ILoginRequest, useLoginMutation } from '../../services/auth.service'
import useValidateLoginForm from '../../hooks/login/useValidateLoginForm.hook'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Face } from '@mui/icons-material'
import { blueGrey } from '@mui/material/colors'
import useThemeHook from '../../hooks/theme/useTheme.hook'

const Login = () => {
  const navigate = useNavigate()
  const { theme } = useThemeHook()
  const { t } = useTranslation()
  const [login, { isLoading }] = useLoginMutation()

  const [serverErrorState, setServerErrorState] = useState<string>('')

  const {
    emailRegister,
    passwordRegister,
    rememberMeRegister,
    handleSubmit,
    errors
  } = useValidateLoginForm()

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        '& > .MuiBox-root': {
          flexGrow: 1,
          flexBasis: 0
        }
      }}
    >
      <Box
        bgcolor={theme.palette.mode === 'light' ? blueGrey[900] : blueGrey[300]}
        sx={{
          display: { xs: 'none', sm: 'block' }
        }}
      >
        <Container
          maxWidth='md'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            variant='body1'
            color={
              theme.palette.mode === 'light' ? blueGrey[300] : blueGrey[900]
            }
          >
            {t('loginPageDescription')}
          </Typography>
        </Container>
      </Box>

      <Box>
        <Container
          maxWidth='xs'
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <Face />
          </Avatar>

          <Typography
            component='h5'
            variant='h5'
            fontWeight='medium'
            sx={{
              my: 1
            }}
          >
            {t('signIn')}
          </Typography>

          <TextField
            {...emailRegister}
            fullWidth
            required
            label={t('email')}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
            autoComplete='email'
            sx={{ my: 1 }}
          />

          <TextField
            {...passwordRegister}
            fullWidth
            required
            type='password'
            label={t('password')}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            autoComplete='current-password"'
            sx={{ my: 1 }}
          />
          <Box width={1}>
            <FormControlLabel
              control={
                <Checkbox
                  {...rememberMeRegister}
                  value={true}
                  color='primary'
                />
              }
              label={t('rememberMe')}
            />
          </Box>

          {serverErrorState && (
            <Alert
              severity='error'
              sx={{
                width: 1
              }}
            >
              {serverErrorState}
            </Alert>
          )}

          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              fullWidth
              variant='contained'
              onClick={handleSubmit(onSubmit)}
              size='large'
              sx={{ my: 2 }}
            >
              {t('signIn')}
            </Button>
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default Login
