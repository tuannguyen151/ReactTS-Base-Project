import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit'

import { authApi } from '../services/auth.service'
import authSlice from './auth/auth.slice'

const reducer = {
  [authApi.reducerPath]: authApi.reducer,
  [authSlice.name]: authSlice.reducer
}

const middlewares: Middleware[] = [authApi.middleware]

export const store = configureStore({
  reducer: combineReducers<typeof reducer>(reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
