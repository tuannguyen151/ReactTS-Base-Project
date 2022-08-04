import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import IAuth from '../../models/auth.model'

interface IAuthState {
  token: string | null
}

const initialState: IAuthState = {
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (
      state,
      { payload }: PayloadAction<IAuth & { remember_me: boolean }>
    ) => {
      state.token = payload.token

      if (payload.token)
        Cookies.set('token', payload.token, {
          expires: payload.remember_me ? 30 : undefined
        })
    },
    setLogout: (state) => {
      state.token = null

      Cookies.remove('token')
    }
  }
})

export const { setLogin, setLogout } = authSlice.actions

export default authSlice
