import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import { Mutex } from 'async-mutex'
import { setLogout } from '../store/auth/auth.slice'
import config from '../config'

const { ENV_ENDPOINT_API } = import.meta.env
const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: ENV_ENDPOINT_API,
  prepareHeaders: (headers) => {
    const token = Cookies.get('token')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  }
})

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)

  if (
    result.error &&
    result.error.status === 401 &&
    window.location.pathname !== config.loginPath
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        api.dispatch(setLogout())
        window.location.href = config.loginPath
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export default customFetchBase
