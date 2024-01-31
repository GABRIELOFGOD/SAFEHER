import React from 'react'
import Header from './Header'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-[100vh] flex flex-col'>
      <Header />
      <div className='flex overflow-hidden h-full'>
        <SideNav />
        <div className='h-full overflow-y-auto'><Outlet /></div>
      </div>
    </div>
  )
}

export default Layout