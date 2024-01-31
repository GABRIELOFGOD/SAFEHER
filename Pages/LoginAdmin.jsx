import React, { useEffect, useState } from 'react'
import { useUserContext } from '../utils/context'
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosed } from "react-icons/io5";
import { Toaster } from 'react-hot-toast';

const LoginAdmin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { username, loginMsg, adminLogin, getAdmin } = useUserContext()

  useEffect(() => {
    getAdmin()
  }, [])

  // console.log(username)

  return (
    <div className={`absolute duration-300 flex items-center justify-center z-50 bg-primary bg-opacity-90 top-0 left-0 h-[100vh] w-[100vw]`}>
        <div className='p-12 bg-white relative rounded-xl'>
            {/* <MdOutlineClose className='border text-primaryDark border-primaryDark rounded-full text-3xl absolute right-6 top-6 cursor-pointer' /> */}
            <p className="text-center text-2xl mb-10 text-primaryDark font-bold">Administrative Login</p>
            {/* {loginError && <p className='w-full border-2 border-red-800 text-[10px] mb-3 p-1 capitalize rounded-md text-red-800 bg-red-300 text-center'>{loginError}</p>} */}
            <form className='flex flex-col gap-5' onSubmit={(e) => adminLogin(e, email, password)}>
                <div className='relative'>
                  <HiOutlineMail className='absolute text-primaryDark text-xl mt-2.5 ml-2.5' />
                  <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='w-full outline-none h-[40px] bg-[#efefef] border text-[12px] rounded-md text-primaryDark font-bold border-textGray px-10' placeholder='Email' />
                </div>
                <div className='relative'>
                  <IoLockClosed className='absolute text-primaryDark text-xl mt-2.5 ml-2.5' />
                  <input type="Password" value={password} onChange={e => setPassword(e.target.value)} className='w-full outline-none h-[40px] bg-[#efefef] border text-[12px] rounded-md text-primaryDark font-bold border-textGray px-10' placeholder='password' />
                </div>
                
                
                <button className='bg-primaryDark duration-200 hover:bg-primary py-3 px-4 text-white text-[12px] uppercase font-semibold w-full rounded-md'>Login</button>
            </form>
        </div>
        <Toaster />
    </div>
  )
}

export default LoginAdmin