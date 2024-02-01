import React, { useEffect, useState } from 'react'
// import { blogPosts } from '../utils/constansts'
import BlogCard from '../components/BlogCard'
import NewBlog from '../components/NewBlog'
import { useUserContext } from '../utils/context'
import NoConnection from '../components/NoConnection'
import LoginAdmin from './LoginAdmin'

const Blog = () => {
  const [isOpened, setIsOpened] = useState(false)
  const { fetchBlog, getAdmin, blog, username } = useUserContext()
  const [isConnected, setIsConnected] = useState(true)

  const checkConnection = () => {
    if(navigator.onLine == false){
      setIsConnected(false)
    }else{
      setIsConnected(true)
    }
  }
  useEffect(() => {
    checkConnection()
  }, [navigator.onLine])


  // if(!username) location.assign('/login')

  // useEffect(() => {
  //   getAdmin()
  // }, [])

  const opener = () => {
    setIsOpened(true)
  }
  const closer = () => {
      setIsOpened(false)
  }

  useEffect(() => {
    fetchBlog()
    getAdmin()
    checkConnection()
  }, [])


  return (
    <div>
      {isConnected ? <div className='px-12 py-6'>
      <div className="justify-between flex mb-10">
        <p className="text-2xl text-primaryDark capitalize font-bold">This are the recent blogs</p>
        <button onClick={opener} className='bg-primaryDark whitespace-nowrap rounded-md py-2 px-4 font-bold text-[12px] text-white'>Post New Blog</button>
      </div>
      {blog ? <div className='flex flex-wrap gap-10'>
        {
          blog?.slice(0).reverse().map(blog => (
            <div to={`/blog/${blog.id}`} key={blog.id}>
              <BlogCard
                id={blog.title}
                title={blog.title}
                body={blog.body}
                date={blog.datePost}
                postedBy={blog.posterName}
                image={blog.image}
              />
            </div>
          ))
        }
      </div> : <div>
          <p className='text-center font-extrabold text-8xl capitalize text-textGray'>No Blog posted yet</p>
          <p className="text-primaryDark text-center font-bold mt-10 text-xl">{username} Please help post a blog so here won't be empty</p>
        </div>}
      {isOpened && <NewBlog isOpened={isOpened} closer={closer}/>}
      {!username && <LoginAdmin / >}
    </div> : <NoConnection />}
    </div>
  )
}

export default Blog