import React, { useState } from 'react';
import { wrap } from '../utils/truncator';
import { CiMenuKebab } from "react-icons/ci";

const BlogCard = ({title, image, body, postedBy, date}) => {
  const [menu, setMenu] = useState(false)
  const [menunu, setMenunu] = useState(false)

  const openMenu = () => {
    setMenu(true)
  }

  const openMenunu = () => {
    setMenunu(true)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  const closeMenunu = () => {
    setMenunu(false)
  }

  return (
    <div onMouseEnter={openMenunu} onMouseLeave={closeMenunu} className='w-[250px]  border relative border-[#efefef] rounded-lg overflow-hidden shadow-md'>
      <div onMouseEnter={openMenu} onMouseLeave={closeMenu} className={`absolute top-1 right-1 rounded-full h-8 w-8 text-black p-2 bg-[#efefef] hover:bg-[#efefef] bg-opacity-20 hover:bg-opacity-50  ${menunu ? 'flex' : 'hidden'} `}>
        <CiMenuKebab />
        <div className={`capitalize right-1 top-7 duration-200 bg-white px-4 py-2 absolute rounded-md whitespace-nowrap font-semibold text-[12px] flex-col gap-3 ${menu ? 'flex' : 'hidden'} `}>
          <p className='hover:text-primary'>View Blog</p>
          <p className='hover:text-primary'>edit Blog</p>
          <p className='hover:text-primary'>delete Blog</p>
        </div>
      </div>
        <img src={image} className='w-full' alt="Blog-image" />
        <div className='p-3'>
            <div>
                <p className="font-bold text-center text-lg">{title}</p>
                <p>{wrap(body)}</p>
            </div>
            <p className="text-primaryDark text-right text-[10px]">Read more...</p>
            <div className='flex mt-5 text-[10px] justify-between text-textGray'>
                <p><b>Posted By: </b>{postedBy}</p>
                <p>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard