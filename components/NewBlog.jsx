import React, { useRef, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useUserContext } from '../utils/context'

const NewBlog = ({isOpened, closer}) => {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { postBlog } = useUserContext()

  const handleFileChange = (event) => {
    try {
      setFile(event.target.files[0]);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={`absolute ${isOpened ? 'scale-1' : 'scale-0'} duration-500 flex items-center justify-center z-50 bg-primary bg-opacity-80 top-0 left-0 h-[100vh] w-[100vw]`}>
        <div className='p-12 bg-white relative rounded-xl'>
            <MdOutlineClose onClick={closer} className=' text-primaryDark border-primaryDark rounded-full text-3xl absolute right-6 top-6 cursor-pointer' />
            <p className="text-center text-2xl mb-10 text-primaryDark font-bold">Post New Blog</p>
            <form className='flex flex-col gap-5' onSubmit={e => postBlog(e, file, title, body)}>
                <div className='flex'>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className='w-full outline-none h-[40px] bg-[#efefef] border text-[12px] rounded-md border-textGray px-6' placeholder='Blog Title' />
                    <input placeholder='Upload Image' onChange={handleFileChange} className='my-auto ml-5' type="file" />
                </div>
                <textarea value={body} onChange={e => setBody(e.target.value)} name="blog-body" className='w-full h-[100px] outline-none bg-[#efefef] rounded-md border border-textGray py-2 text-[12px] px-6' placeholder='Blog content here...'></textarea>
                <button className='bg-primaryDark hover:bg-primary duration-200 py-3 px-4 text-white text-[12px] uppercase font-semibold w-full rounded-md'>Post Blog</button>
            </form>
        </div>
    </div>
  )
}

export default NewBlog;