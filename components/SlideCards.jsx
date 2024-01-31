import React from 'react'

const SlideCards = ({icon, title, count}) => {
  return (
    <div className='flex gap-5 hover:scale-[105%] duration-200 p-3 hover:bg-primaryDark hover:text-white min-w-[250px] border border-[#efefef] rounded-lg shadow-md'>
        <p className='my-auto text-primary text-6xl'>{icon}</p>
        <div className='my-auto'>
            <p className="font-extrabold text-center text-2xl">{count}</p>
            <p className="font-bold text-[12px]">{title}</p>
        </div>
    </div>
  )
}

export default SlideCards