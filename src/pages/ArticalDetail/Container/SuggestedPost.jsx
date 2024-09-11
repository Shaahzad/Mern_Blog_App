import React from 'react'
import { Link } from 'react-router-dom'

const SuggestedPost = ({className,header, post = [], tags}) => {
  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}>
     <h1 className='font-medium text-Dark-hard md:text-xl'>{header}</h1>
     <div className='grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
     {post.map((item, index) => (
         <div key={item.id} className='flex gap-x-3 flex-nowrap items-center'>
         <img className='aspect-square object-cover rounded-lg w-1/5' src={item.image} alt="laptop" />
         <div className='text-sm font-medium text-Dark-hard'>
            <h3 className='text-sm font-medium text-Dark-hard md:text-base lg:text-lg'>{item.title}</h3>
            <span className='text-xs opacity-60'>
                {new Date(item.createdAt).toLocaleDateString("en-US",{
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
            </span>
         </div>
         </div>
     ))}
     </div>
     <h2 className='text-Dark-hard font-medium mt-8 md:text-xl'>Tags</h2>
     <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
        {tags.map((item, index) => (
        <Link key={index}
        className='inline-block rounded-md font-medium px-3 py-1.5 bg-primary text-xs text-white
        md:text-sm
        '
         to="/">
            {item}
        </Link>
        ))}
     </div>
    </div>
  )
}

export default SuggestedPost