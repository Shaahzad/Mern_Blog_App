import React, { useState } from 'react'
import { images } from '../constants'

const Header = () => {
    const [NavIsvisible, setNavIsvisible] = useState(false)
    const navVisibilityHandler = ()=>{
     setNavIsvisible((curstate)=>{
        return !curstate
     })
    }
  return (
    <section >
        <header className='flex justify-between container mx-auto px-5 py-4 items-center'>
            <div>
                <img className='w-16' src={images.Logo} alt="" />
            </div>
            <div className={`${NavIsvisible ? 'right-0' : '-right-full'} flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed  top-0 bottom-0 lg:static gap-x-9 items-center`}>
                <ul className='flex gap-x-5 font-semibold'>
                    <li>Home</li>
                    <li>Articles</li>
                    <li>Pages</li>
                    <li>Pricing</li>
                    <li>Faq</li>
                </ul>
                <button className='border-blue-500 border-2 px-6 py-2 font-semibold text-blue-500 rounded-full
                hover:bg-blue-500 hover:text-white transition-all duration-300
                '>Sign in</button>
            </div>
        </header>
    </section>
  )
}

export default Header