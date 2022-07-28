import { lazy, ReactElement, Suspense } from 'react'
import { Route } from 'react-router-dom'

const Error403 = lazy(() => import('../pages/errors/403.page'))
const Error404 = lazy(() => import('../pages/errors/404.page'))
const Error504 = lazy(() => import('../pages/errors/504.page'))

export default (
  <Route>
    <Route
      path='errors/403'
      element={
        <Suspense>
          <Error403 />
        </Suspense>
      }
    />
    <Route
      path='errors/404'
      element={
        <Suspense>
          <Error404 />
        </Suspense>
      }
    />
    <Route
      path='errors/504'
      element={
        <Suspense>
          <Error504 />
        </Suspense>
      }
    />
  </Route>
) as ReactElement
