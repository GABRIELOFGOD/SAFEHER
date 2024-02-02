import React, { useEffect } from 'react'
import { useUserContext } from '../utils/context'
import { Toaster } from 'react-hot-toast'

const Notification = ({children}) => {
    const { flagExplicit, getAdmin } = useUserContext()

    useEffect(() => {
      getAdmin()
    }, [])
  
    return (
      <div className={`absolute duration-300 flex items-center justify-center z-[5000] bg-white bg-opacity-60 top-0 left-0 h-[100vh] w-[100vw]`}>
          {children}
          <Toaster />
      </div>
  )
}

export default Notification