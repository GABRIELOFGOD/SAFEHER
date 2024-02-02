import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UrlCard from '../components/UrlCard'
import { useUserContext } from '../utils/context'
import NoConnection from '../components/NoConnection'
import LoginAdmin from './LoginAdmin'

const Urls = () => {
  const { urlGetter, getAdmin, username, urls } = useUserContext()
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

  useEffect(() => {
    getAdmin()
    checkConnection()
    urlGetter()
  }, [])
  return (
    <div>
      {isConnected ? <div className='py-6 px-12'>
      <p className="font-bold text-primaryDark text-4xl">This are the recent url reports</p>
      <div className='flex gap-10 flex-wrap mt-5'>
        {urls?.slice(0).reverse().map(web => (
          <Link to={`/url/${web._id}`} key={web._id}>
            <UrlCard
              url={web.url}
              length={web.images?.length}
              explicit={web.isExplicit}
            />
          </Link>
        ))}
      </div>
      {!username && <LoginAdmin / >}
    </div> : <NoConnection />}
    </div>
  )
}

export default Urls