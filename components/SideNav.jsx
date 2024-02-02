import React from 'react'
import { sideNav } from '../utils/constansts'
import { NavLink } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { useUserContext } from '../utils/context';

const SideNav = () => {
  const {logout} = useUserContext()
  
  return (
    <div className='w-[300px] p-6 flex relative flex-col z-50 gap-2 sidebar capitalize text-textGray text-[12px] bg-white shadow-lg h-full'>
      {
        sideNav.map(item => (
          <NavLink className='flex gap-3 whitespace-nowrap hover:bg-[#efefef] duration-150 py-2 px-6 rounded-md' to={item.path} key={item.id}>
            <span className='text-lg my-auto'>{item.icon}</span>
            <p className='my-auto'>{item.element}</p>
          </NavLink>
        ))
      }
      <div onClick={logout} className='flex text-primaryDark absolute bottom-5 left-10 py-3 px-6 duration-200 cursor-pointer rounded-md hover:bg-[#efefef] text-base gap-3'>
        <IoIosLogOut className='text-xl my-auto' />
        <p className="font-bold my-auto text-[12px]">Logout</p>
      </div>
    </div>
  )
}

export default SideNav;