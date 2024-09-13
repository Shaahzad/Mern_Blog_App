import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../../constants'
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaComments } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import NavItem from './NavItem'
import NavItemcollapse from './NavItemcollapse'
import { useWindowSize } from '@uidotdev/usehooks'


const MENU_ITEM = [
    {
        title: 'Dashboard',
        link: '/admin',
        icon: <AiFillDashboard className='text-xl'/>,
        name: "dashboard",
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
        content: [{title: "New", link: "/admin/posts/new"}, {title: "Manage", link: "/admin/posts/manage"}],
        icon: <MdDashboard className='text-xl'/>,
        name: "posts",
        type: "collapse"
    },
]

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [ActiveNavName, setActiveNavName] = useState('dashboard')
    const windowsize = useWindowSize()

    const toggleMenuHandler = () => {
        setIsMenuActive(!isMenuActive)
    }

    useEffect(()=>{
      if(windowsize.width < 1024){
          setIsMenuActive(false)
      }else{
          setIsMenuActive(true)
      }
    },[windowsize.width])
  return (
    <header className='flex h-fit  items-center justify-between p-4
    lg:h-full lg:max-w-[600px] lg:flex-col lg:items-start lg:justify-start lg:p-0
    '>
        <Link to="/">
        <img src={images.Logo} alt="logo" className='w-16 lg:hidden'/>
        </Link>
        {/* Hamburger */}
        <div className='cursor-pointer lg:hidden'>
            {isMenuActive ? (<AiOutlineClose className='w-6 h-6 text-black' onClick={toggleMenuHandler}/>) 
            : (<AiOutlineMenu className='w-6 h-6' onClick={toggleMenuHandler}/>)}
        </div>
            {isMenuActive && <div className='fixed inset-0 lg:static lg:h-full lg:w-full'>
                <div className='fixed inset-0 bg-black opacity-50 lg:hidden' onClick={toggleMenuHandler}/>
                {/* sidebar */}
                <div className='fixed top-0 bottom-0 left-0 z-50 w-3/4 bg-white p-4 overflow-y-auto
                lg:static lg:h-full lg:w-full lg:p-6
                '>
                <Link to="/">
                <img src={images.Logo} alt="logo" className='w-16'/>
                </Link>
                <h4 className='mt-10 font-bold text-[#C7C7C7]'>Main Menu</h4>
                {/* menu items */}
                <div className='mt-6 flex flex-col gap-y-[0.563rem]'>
                   {MENU_ITEM.map((item) => item.type === "link" ?
                     <NavItem  
                     key={item.name}
                     title={item.title} 
                     link={item.link} 
                     icon={item.icon}
                     name={item.name} 
                     setActiveNavName={setActiveNavName} 
                     ActiveNavName={ActiveNavName}/>
                      : <NavItemcollapse
                      key={item.name}
                      title={item.title} 
                     content={item.content} 
                     icon={item.icon}
                     name={item.name} 
                     setActiveNavName={setActiveNavName} 
                     ActiveNavName={ActiveNavName}/>
                )}
                </div>
                </div>
                </div>
                }
    </header>
  )
}

export default Header