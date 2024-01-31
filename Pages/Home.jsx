import React from 'react'
import { dashboardNav } from '../utils/constansts'
import { Link } from 'react-router-dom'
import SlideCards from '../components/SlideCards'

const Home = () => {
  return (
    <div className='px-12 py-6'>
      <p className='text-xl text-primaryDark font-bold'>Welcome User soso</p>
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
    </div>
  )
}

export default Home