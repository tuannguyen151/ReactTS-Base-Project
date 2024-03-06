import { ReactElement, Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

const Private = lazy(() => import('../../pages/private.page'))

export default (
  <Route>
    <Route
      path='private'
      element={
        <Suspense>
          <Private />
        </Suspense>
      }
    />
  </Route>
) as ReactElement
