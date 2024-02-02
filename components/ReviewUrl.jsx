import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useUserContext } from '../utils/context'
import Loader from './Loader';
import { TiArrowBack } from "react-icons/ti";
import UrlImageCard from './UrlImageCard';
import { FidgetSpinner } from 'react-loader-spinner';
import FlagExplicit from './FlagExplicit';
import Notification from './Notification';

const ReviewUrl = () => {
    const [confirm, setConfirm] = useState(false)
    const {id} = useParams()
    const {getAUrl, singleUrl, unFlagExplicit} = useUserContext()

    useEffect(() => {
        getAUrl(id)
    }, [])

    const changeConfirm = () => {
        setConfirm(!confirm)
    }
    // singleUrl?.images?.map(image => console.log(image))
  return (
    <div>
        {singleUrl ? <div className='py-6 relative px-12'>
            <div className='sticky bg-white top-0'>
                <Link to='/urls' className='flex text-textGray -ml-8 mb-5'>
                    <TiArrowBack className='text-xl my-auto' />
                    <p className="font-bold my-auto text-sm">Back</p>
                </Link>
                <p className="text-2xl font-bold text-primaryDark">This is a review page for <Link to={singleUrl.url} className='underline hover:text-primary duration-200' target='_blank'>{singleUrl.url}</Link></p>
                <div className='text-white flex justify-between py-3 capitalize'>
                    <button className='bg-yellow-500 py-2 rounded-md hover:bg-opacity-80 text-xs capitalize duration-300 px-4'>Delete URL</button>
                    {singleUrl.isExplicit == true ? <button className='bg-green-500 py-2 rounded-md hover:bg-opacity-80 text-xs capitalize duration-300 px-4' onClick={() => unFlagExplicit(id)}>unflag explicit</button> : <button className='bg-red-500 py-2 rounded-md hover:bg-opacity-80 text-xs capitalize duration-300 px-4' onClick={changeConfirm}>flag explicit</button>}
                </div>
            </div>
            <div>
                {singleUrl.images?.length <= 0 || singleUrl?.images == null ? <p className='text-center text-2xl text-textGray mt-28'>This website contain no image</p> : <div className='flex gap-5 mt-5 flex-wrap'>
                    {singleUrl.images?.map((image, i) => (
                        <Link target='_blank' to={image} key={i}><div className='w-[150px] h-[150px] rounded-md overflow-hidden flex items-center justify-center'>
                        <img src={image} alt="url image" />
                    </div></Link>
                    ))}
                </div>}
            </div>
        </div> : <Loader />}
        {confirm && <Notification children={<FlagExplicit url={singleUrl?.url} closer={changeConfirm} />} />}
    </div>
  )
}

export default ReviewUrl