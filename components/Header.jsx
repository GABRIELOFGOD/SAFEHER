import React from 'react';
const logo = '/images/safer-logo.png';
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex sticky top-0 justify-between px-10 shadow-md bg-white'>
      <img src={logo} alt="Logo" className='w-[100px] my-auto' />
      <form className='my-auto relative w-fit' onSubmit={e => e.preventDefault()}>
        <IoSearch className='absolute text-textGray text-xl flex top-2 left-2' />
        <input className='h-[40px] rounded-md outline-none font-bold search text-[12px] border w-[400px] bg-[#efefef] px-10 border-black' type="search" placeholder='Search...' />
      </form>
      <Link className='flex rounded-full gap-2 p-2 bg-[#efefef] my-auto'>
        <CgProfile className='text-2xl ' />
        <p className="font-bold my-auto text-textGray text-[12px] whitespace-nowrap">Sample Username</p>
      </Link>
    </div>
  )
}

export default Header;