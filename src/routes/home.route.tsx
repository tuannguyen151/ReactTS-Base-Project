import { ReactElement } from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/home.page'

export default (<Route index element={<Home />} />) as ReactElement
