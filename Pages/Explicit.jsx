import React, { useEffect, useState } from 'react'
import { useUserContext } from '../utils/context'
import LoginAdmin from './LoginAdmin'
import NoConnection from '../components/NoConnection'
import UrlCard from '../components/UrlCard'
import { Link } from 'react-router-dom'

const Explicit = () => {
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

  const explicitUrls = []

  const check = urls?.map(web => {
    if(web?.isExplicit == true){
      explicitUrls.push(web)
    }
  })

  return (
    <div>
      {isConnected ? <div className='py-6 px-12'>
      <p className="font-bold text-primaryDark text-2xl">This are the confirmed urls containing explicit contents</p>
      <div className='flex gap-10 flex-wrap mt-5'>
        {explicitUrls?.slice(0).reverse().map(web => (
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

export default Explicit