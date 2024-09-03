import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({data}) => {
  return (
    <div  className='flex items-center overflow-x-auto py-4 whitespace-nowrap'>
     {data.map((item, index) => (
         <div key={index} className='text-black opacity-50 text-xs md:text-sm'>
            <Link to={item.link}>
            {item.name}
            {index !== data.length - 1 && <span className='mx-2'>/</span>}
            </Link>
         </div>
     ))}
    </div>
  )
}

export default Breadcrumbs