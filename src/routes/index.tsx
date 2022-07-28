import { ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from '../layouts'

import homeRoute from './home.route'
import errorsRoute from './errors.route'

export default (
  <Routes>
    <Route element={<Layout />}>{homeRoute}</Route>

    {errorsRoute}
    <Route path='*' element={<Navigate to='errors/404' />} />
  </Routes>
) as ReactElement
