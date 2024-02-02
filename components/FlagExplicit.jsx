import React from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from '../utils/context';

const FlagExplicit = ({url, closer}) => {
  const {id} = useParams();
  const {flagExplicit} = useUserContext()

  return (
    <div className='bg-white capitalize border border-textGray p-5 rounded-lg shadow-md '>
      <p className="text-center font-bold">are you sure this website ({url}) contain explicit contents?</p>
      <div className="flex mt-7 gap-5 items-center justify-center">
        <button onClick={() => flagExplicit(id)} className='capitalize rounded-md border border-red-700 text-red-700 py-2 px-4 duration-200 hover:bg-red-700 hover:text-white'>yes, i'm sure</button>
        <button onClick={closer} className='capitalize rounded-md border border-primaryDark text-white bg-primaryDark py-2 px-4 duration-200 hover:bg-primary'>cancel</button>
      </div>
    </div>
  )
}

export default FlagExplicit