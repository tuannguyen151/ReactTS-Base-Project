import { ReactElement } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import config from '../../config'

import privateRoute from './private.route'

export default (
  <Route
    element={
      !Cookies.get('token') ? <Navigate to={config.loginPath} /> : <Outlet />
    }
  >
    {privateRoute}
  </Route>
) as ReactElement
