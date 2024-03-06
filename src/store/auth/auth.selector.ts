import { RootState } from '..'

export const tokenSelector = (state: RootState) => state.auth.token
