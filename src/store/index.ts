import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit'

import { authApi } from '../services/auth.service'
import authSlice from './auth/auth.slice'
import { todosSocket } from '../sockets/todos.socket'

const reducer = {
  [authApi.reducerPath]: authApi.reducer,
  [todosSocket.reducerPath]: todosSocket.reducer,
  [authSlice.name]: authSlice.reducer
}

const middlewares: Middleware[] = [authApi.middleware, todosSocket.middleware]

export const store = configureStore({
  reducer: combineReducers<typeof reducer>(reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
