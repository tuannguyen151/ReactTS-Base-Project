import { Outlet } from 'react-router-dom'

import Header from './header'
import Sidebar from './sidebar'

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
