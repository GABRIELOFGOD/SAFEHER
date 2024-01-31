import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

const NewBlog = (isOpened, setIsOpened) => {

    const closer = () => {
        setIsOpened(false)
    }

  return (
    <div className={`absolute ${isOpened ? 'flex' : 'hidden'} items-center justify-center z-50 bg-primary bg-opacity-80 top-0 left-0 h-[100vh] w-[100vw]`}>
        <div className='p-12 bg-white relative rounded-xl'>
            <MdOutlineClose onClick={closer} className='border text-primaryDark border-primaryDark rounded-full text-3xl absolute right-6 top-6 cursor-pointer' />
            <p className="text-center text-2xl mb-10 text-primaryDark font-bold">Post New Blog</p>
            <form className='flex flex-col gap-5' onSubmit={e => e.preventDefault()}>
                <div className='flex'>
                    <input type="text" className='w-full outline-none h-[40px] bg-[#efefef] border text-[12px] rounded-md border-textGray px-6' placeholder='Blog Title' />
                    <input className='my-auto ml-5' type="file" />
                </div>
                <textarea name="blog-body" className='w-full h-[100px] outline-none bg-[#efefef] rounded-md border border-textGray py-2 text-[12px] px-6' placeholder='Blog content here...'></textarea>
                <button className='bg-primaryDark py-2 px-4 text-white text-[12px] uppercase font-semibold w-full rounded-md'>Post Blog</button>
            </form>
        </div>
    </div>
  )
}

export default NewBlog