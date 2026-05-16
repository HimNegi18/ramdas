import React from 'react'
import { Link } from 'react-router-dom'

const Heading = ({title, path}) => {
  return (
    <div className='h-32 bg-gray-800 flex flex-col items-center justify-center
     text-lg font-semibold text-white'>
        <p>
            <Link to='/' className='hover:underline hover:text-[#03a9f5]'>
                Home
            </Link> {`/ `} 
            <Link to={path} className='hover:underline hover:text-[#03a9f5]'>
                {title}
            </Link>
        </p>
    </div>
  )
}

export default Heading