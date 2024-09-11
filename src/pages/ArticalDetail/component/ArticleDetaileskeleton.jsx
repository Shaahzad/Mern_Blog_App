import React from 'react'
import { BiImageAlt } from "react-icons/bi";


const ArticleDetaileskeleton = () => {
  return (
    <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex:row
    lg:gap-x-5 lg:items-center animate-pulse'>

        <article className='flex-1'>
         {/* post image */}
         <div className='rounded-xl aspect-video w-full bg-slate-300 flex justify-center items-center'>
<BiImageAlt className='text-4xl text-slate-400'/>
         </div>
        </article>

    </section>
  )
}

export default ArticleDetaileskeleton