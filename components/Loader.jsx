import React from 'react'
import { Puff } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='absolute top-0 left-0 bg-white h-[100vh] w-[100vw] flex items-center justify-center '>
        <Puff color='#001F4D' width={100} height={100} />
    </div>
  )
}

export default Loader