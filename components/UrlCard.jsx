import React from 'react'

const UrlCard = ({length, url, datePosted, explicit}) => {
  return (
    <div className='py-4 px-6 relative shadow-md border rounded-md hover:border-b-4 border-b-primaryDark duration-300 border-[#efefef] text-pretty'>
        {explicit == true && <p className='text-red-500 text-[8px] absolute top-2 right-2'>explicit</p>}
        <div className="font-bold flex justify-center gap-3 text-2xl text-center"><p>{length}</p> <p className='text-[8px] my-auto text-textGray'>images</p></div>
        <p className="text-center">{url}</p>
        {datePosted && <p className="pt-3 text-xs capitalize text-textGray">posted on{datePosted}</p>}
    </div>
  )
}

export default UrlCard