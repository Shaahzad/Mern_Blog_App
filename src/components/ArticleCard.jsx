import React from 'react'
import { FaCheck } from "react-icons/fa6";
import images from "../constants/images"
import stables from '../constants/stable';
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";


const ArticleCard = ({post,className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
        <img src={post.photo ? stables.upload_Folder_Base_Url + post.photo : images.PostImage} alt="title" className='w-full object-cover object-center h-auto md:h-52
        lg:h-48 xl:h-60
        '/>
        <div className='p-5'>
           <h2 className='font-roboto font-bold text-xl text-Dark-soft md:text-2xl 
            lg:text-[28px]
           '>{post.Title}</h2>
           <p className='text-Dark-light mt-3 text-sm md:text-lg'>{post.Caption}</p>
           <div className='flex justify-between flex-nowrap items-center mt-6'>
            <div className='flex items-center gap-x-2 md:gap-x-2.5'>
              {
                post.user.avatar ? (
                  <img src={stables.upload_Folder_Base_Url + post.user.avatar} alt="avatar" className='w-10 h-10 object-cover object-center rounded-full'/>
                )
                : (
                  <FaRegUserCircle className='w-9 h-9 object-cover object-center rounded-full'/>
                )
              }
             <div className='flex flex-col'>
               <h4 className='font-bold italic text-Dark-light text-sm md:text-base'>{post.user.name ? post.user.name : "John Doe"}</h4>
             <div className='flex items-center gap-x-2'>
                <span className={`${post.user.verified ? "bg-[#36B37E]" : "bg-red-500"} w-fit bg-opacity-20 rounded-full p-1.5`} >
                  {
                    post.user.verified ? <FaCheck className='w-1.5 h-1.5 text-[#36B37E]'/>
                    : 
                    <IoIosCloseCircleOutline className='w-1.5 h-1.5 text-red-500'/>
                  }
                    </span>
                <span className='italic text-Dark-light text-sm md:text-sm'>
                    {post.user.verified ? "Verified" : "Unverified"} Writer
                </span>
             </div>
            </div>
            </div>
            <span className='text-Dark-light font-bold italic text-sm md:text-base'>
              {new Date(post.createdAt).getDate()} {new Date(post.createdAt).toLocaleString("en-US", {month: "short"})}</span>
           </div>
        </div>
    </div>
  )
}

export default ArticleCard