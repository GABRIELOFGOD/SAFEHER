import React, { useEffect } from 'react'
import { dashboardNav } from '../utils/constansts'
import { Link } from 'react-router-dom'
import SlideCards from '../components/SlideCards'
import { useUserContext } from '../utils/context'
import LoginAdmin from './LoginAdmin'

const Home = () => {
  const {username, getAdmin} = useUserContext()

  // if(!username) location.assign('/login')

  useEffect(() => {
    getAdmin()
  }, [])

  return (
    <div className='px-12 py-6'>
      {username ? <p className='text-xl text-primaryDark font-bold'>Welcome {username}</p> : <p className='text-xl text-primaryDark font-bold'>Welcome guest</p>}
      <div className='flex gap-10 capitalize mt-12 flex-wrap'>
        {
          dashboardNav.map(item => (
            <Link to={item.path} key={item.id}>
              <SlideCards
                title={item.element}
                icon={item.icon}
                count={item.count}
              />
            </Link>
          ))
        }
      </div>
      {!username && <LoginAdmin / >}
    </div>
  )
}

export default Home