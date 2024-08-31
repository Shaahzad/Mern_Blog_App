import React from 'react'
import  images  from '../../constants/images.js'
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
        <div className='mt-10 lg:w-1/2'>
            <h1 className='font-mono text-3xl text-center font-bold text-Dark-soft md:text-5xl lg:text-left lg:max-w-[540px]'>Read The Most Interesting Articles</h1>
            <p className='text-Dark-light mt-4 text-center md:text-xl lg:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, incidunt perferendis at enim recusandae autem.</p>
        <div className='flex flex-col gap-y-2.5 mt-10 relative'>
            <div className='relative'>
                <CiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]'/>
                <input className='placeholder:font-bold font-semibold text-Dark-soft placeholder:text[#959EAD] rounded-lg pl-12 pr-3
                w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4
                ' placeholder='Search Article' type="text" />
            </div>
            <button className='w-full text-center bg-primary text-white font-semibold rounded-lg py-3 px-5 
            md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2
            '>Search</button>
        </div>
        <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
            <span className='text-Dark-light font-semibold italic mt-2 lg:mt-4'>Popular Tags:</span>
            <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3'>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Design</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Experience</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Interfaces</li>
            </ul>
        </div>
        </div>
        <div className='hidden lg:block lg:1/2'>
            <img className='w-full' src={images.HeroImage} alt="" />
        </div>
    </section>
  )
}

export default Hero