import React, { useEffect, useState } from 'react'
import { blogPosts } from '../utils/constansts'
import BlogCard from '../components/BlogCard'
import NewBlog from '../components/NewBlog'
import { useUserContext } from '../utils/context'

const Blog = () => {
  const [isOpened, setIsOpened] = useState(false)
  const { fetchBlog, getAdmin } = useUserContext()

  const opener = () => {
    setIsOpened(true)
  }
  const closer = () => {
      setIsOpened(false)
  }

  useEffect(() => {
    fetchBlog()
    getAdmin()
  }, [])

  return (
    <div className='px-12 py-6'>
      <div className="justify-between flex mb-10">
        <p className="text-2xl text-primaryDark capitalize font-bold">This are the recent blogs</p>
        <button onClick={opener} className='bg-primaryDark whitespace-nowrap rounded-md py-2 px-4 font-bold text-[12px] text-white'>Post New Blog</button>
      </div>
      <div className='flex flex-wrap gap-10'>
        {
          blogPosts.map(blog => (
            <div to={`/blog/${blog.id}`} key={blog.id}>
              <BlogCard
                id={blog.id}
                title={blog.title}
                body={blog.content}
                date={blog.datePost}
                postedBy={blog.postedBy}
                image={blog.image}
              />
            </div>
          ))
        }
      </div>
      {isOpened && <NewBlog isOpened={isOpened} closer={closer}/>}
    </div>
  )
}

export default Blog