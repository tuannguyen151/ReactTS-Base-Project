import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import type Auth from '../../models/auth.model'

interface AuthState {
  token: string | null
}

const initialState: AuthState = {
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, { payload }: PayloadAction<Auth>) => {
      state.token = payload.token

      if (payload.token) Cookies.set('token', payload.token)
    },
    setLogout: (state) => {
      state.token = null

      Cookies.remove('token')
    },
  },
})

export const { setLogin, setLogout } = authSlice.actions

export default authSlice
