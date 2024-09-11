import React from 'react'
import { BiImageAlt } from "react-icons/bi";


const ArticleDetaileskeleton = () => {
  return (
    <section className='flex flex-col container mx-auto  px-5 py-10 max-w-5xl gap-y-5
    lg:flex-row lg:gap-x-5 lg:items-start animate-pulse 
    '>
        <article className='flex-1'>
         {/* post image */}
         <div className='rounded-xl  aspect-video w-full bg-slate-300 flex justify-center items-center'>
          <BiImageAlt className='text-4xl text-slate-400'/>
         </div>
         {/* title */}
         <div className='mt-4 md:text-[26px] w-2/5 h-2 rounded-lg bg-slate-400'/>
         <div className='mt-4 prose prose-sm sm:prose-base'>
         <p className='w-1/2 h-2 mt-6 rounded-lg bg-slate-300'></p>
         <p className='w-full h-2 mt-4 rounded-lg bg-slate-300'></p>
         <p className='w-[70%] h-2 mt-4 rounded-lg bg-slate-300'></p>
         <p className='w-4/5 h-2 mt-4 rounded-lg bg-slate-300'></p>
         </div>
        </article>

    {/* suggested post */}
<div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 mt-8 lg:mt-0 lg:max-w-xs`}>
 {/* title */}
 <div className='w-[20%] h-2 rounded-lg bg-slate-300'/>
 <div className='grid grid-y-5 mt-5 md:grid:cols-2 md:gap-x-5 lg:grid-cols-1'>
{[...Array(3)].map((item,index)=>(
<div key={index} className='flex space-x-3 flex-nowrap items-center'>
{/* image */}
  <div className='aspect-square w-1/5 rounded-lg bg-slate-300'/>
  <div className='w-full'>
 <div className='w-full h-2 rounded-lg bg-slate-300'/>
 <p className='w-[60%] h-2 mt-4 rounded-lg bg-slate-300'></p>
  </div>
  </div>  
))}
 </div>
</div>
 </section>
  )
}

export default ArticleDetaileskeleton