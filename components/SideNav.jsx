import React from 'react'
import { sideNav } from '../utils/constansts'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='w-[300px] p-6 flex flex-col gap-2 sidebar capitalize text-textGray text-[12px] bg-white shadow-lg h-full'>
      {
        sideNav.map(item => (
          <NavLink className='flex gap-3 whitespace-nowrap hover:bg-[#efefef] duration-150 py-2 px-6 rounded-md' to={item.path} key={item.id}>
            <span className='text-lg my-auto'>{item.icon}</span>
            <p className='my-auto'>{item.element}</p>
          </NavLink>
        ))
      }
    </div>
  )
}

export default SideNav;