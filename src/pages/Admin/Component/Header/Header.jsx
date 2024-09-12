import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../../constants'
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaComments } from 'react-icons/fa'


const MENU_ITEM = [
    {
        title: 'Dashboard',
        link: '/admin',
        icon: <AiFillDashboard className='text-xl'/>,
        name: "Dashboard",
        type: "link"
    },
    {
        title: 'Comments',
        link: '/admin/comments',
        icon: <FaComments className='text-xl'/>,
        name: "Comments",
        type: "link"
    },
    {
        title: 'Posts',
        link: '/admin/posts',
        icon: <FaPos className='text-xl'/>,
        name: "Posts",
        type: "link"
    },
]

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)




    const toggleMenuHandler = () => {
        setIsMenuActive(!isMenuActive)
    }
  return (
    <header className='flex h-fit w-full items-center justify-between p-4'>
        <Link to="/">
        <img src={images.Logo} alt="logo" className='w-16'/>
        </Link>
        {/* Hamburger */}
        <div className='cursor-pointer'>
            {isMenuActive ? (<AiOutlineClose className='w-6 h-6' onClick={toggleMenuHandler}/>) 
            : (<AiOutlineMenu className='w-6 h-6' onClick={toggleMenuHandler}/>)}
        </div>
        <div>
            {isMenuActive && <div className='fixed inset-0'>
                <div className='fixed inset-0 bg-black opacity-50' onClick={toggleMenuHandler}/>
                {/* sidebar */}
                <div className='fixed top-0 bottom-0 left-0 z-50 w-3/4 bg-white p-4 overflow-y-auto'>
                <Link to="/">
                <img src={images.Logo} alt="logo" className='w-16'/>
                </Link>
                <h4 className='mt-10 font-bold text-[#C7C7C7]'>Main Menu</h4>
                {/* menu items */}
                <div className='mt-6 flex flex-col gap-y-[0.563rem]'>

                </div>
                </div>
                </div>
                }
        </div>
    </header>
  )
}

export default Header