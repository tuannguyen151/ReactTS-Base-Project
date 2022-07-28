import { Outlet } from 'react-router-dom'

import Sidebar from './sidebar'
import Header from './header'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <Sidebar />
      <div className='content-wrapper'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
