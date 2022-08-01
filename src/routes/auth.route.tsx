import { lazy, ReactElement, Suspense } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import config from '../config'

const Login = lazy(() => import('../pages/auth/login.page'))

export default (
  <Route element={Cookies.get('token') ? <Navigate to='/' /> : <Outlet />}>
    <Route
      path={config.loginPath}
      element={
        <Suspense>
          <Login />
        </Suspense>
      }
    />
  </Route>
) as ReactElement
