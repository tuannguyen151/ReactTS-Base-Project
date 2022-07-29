import { lazy, ReactElement, Suspense } from 'react'
import { Route } from 'react-router-dom'

const List = lazy(() => import('../pages/todos/list.page'))
const Create = lazy(() => import('../pages/todos/create.page'))
const Show = lazy(() => import('../pages/todos/show.page'))
const Edit = lazy(() => import('../pages/todos/edit.page'))

export default (
  <Route>
    <Route
      path='todos'
      element={
        <Suspense>
          <List />
        </Suspense>
      }
    />
    <Route
      path='todos/create'
      element={
        <Suspense>
          <Create />
        </Suspense>
      }
    />
    <Route
      path='todos/:id'
      element={
        <Suspense>
          <Show />
        </Suspense>
      }
    />
    <Route
      path='todos/:id/edit'
      element={
        <Suspense>
          <Edit />
        </Suspense>
      }
    />
  </Route>
) as ReactElement
