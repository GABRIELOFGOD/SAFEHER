import React from 'react'
const noConnect = '/images/no-disconnect.png'

const NoConnection = () => {
  return (
    <div className='h-[100vh] w-[100vw] items-center flex flex-col justify-center p-12 '>
        <img className='w-[300px]' src={noConnect} alt="No Internet" />
        <p className="font-bold text-xl text-center my-3">Please connect to the Internet to use this server.</p>
    </div>
  )
}

export default NoConnection