import React from 'react'
import { FaCheck } from "react-icons/fa6";
import images from "../constants/images"
const ArticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
        <img src={images.PostImage} alt="title" className='w-full object-cover object-center h-auto md:h-52
        lg:h-48 xl:h-60
        '/>
        <div className='p-5'>
           <h2 className='font-roboto font-bold text-xl text-Dark-soft md:text-2xl 
            lg:text-[28px]
           '>Future of work</h2>
           <p className='text-Dark-light mt-3 text-sm md:text-lg'>Lorem ipsum dolor sit amet.</p>
           <div className='flex justify-between flex-nowrap items-center mt-6'>
            <div className='flex items-center gap-x-2 md:gap-x-2.5'>
             <img src={images.UserImg} alt="" className='w-9 h-9 md:w-10 md:h-10'/>
             <div className='flex flex-col'>
               <h4 className='font-bold italic text-Dark-light text-sm md:text-base'>Shehzad</h4>
             <div className='flex items-center gap-x-2'>
                <span className='bg-[#36B37E] bg-opacity-20 p-1.5 rounded-full w-fit'>
                    <FaCheck className='w-1.5 h-1.5 text-[#36B37E]'/>
                    </span>
                <span className='italic text-Dark-light text-sm md:text-sm'>
                    verify Writer
                </span>
             </div>
            </div>
            </div>
            <span className='text-Dark-light font-bold italic text-sm md:text-base'>02 May</span>
           </div>
        </div>
    </div>
  )
}

export default ArticleCard