import React, { useEffect, useState } from 'react'
import Header from './Header'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'
import NoConnection from './NoConnection'

const Layout = () => {
  const [isConnected, setIsConnected] = useState(true)

  const checkConnection = () => {
    if(navigator.onLine == false){
      setIsConnected(false)
    }else{
      setIsConnected(true)
    }
  }
  useEffect(() => {
    checkConnection()
  }, [])

  return (
    <div>
      {isConnected ? <div className='h-[100vh] flex flex-col'>
        <Header />
        <div className='flex overflow-hidden h-full'>
          <SideNav />
          <div className='h-full overflow-y-auto'><Outlet /></div>
        </div>
      </div>: <NoConnection />}
    </div>
  )
}

export default Layout