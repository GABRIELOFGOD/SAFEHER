import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

const UrlImageCard = ({image}) => {
  return (
    <div className='w-[150px] h-[150px] rounded-md overflow-hidden flex items-center justify-center'>
        {image ? <img className='w-fit' src={image} alt="url image" /> : <FidgetSpinner width={100} height={100} ballColors={'#000000'} backgroundColor='#ffffff' />}
    </div>
  )
}

export default UrlImageCard