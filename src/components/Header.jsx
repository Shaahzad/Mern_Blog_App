import React, { useState } from 'react'
import { images } from '../constants'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../store/countAction/userAction';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [NavIsvisible, setNavIsvisible] = useState(false)
    const userstate = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navVisibilityHandler = ()=>{
     setNavIsvisible((curstate)=>{
        return !curstate
     })
    }


    const LogoutHandler = ()=>{
        dispatch(logout())
        navigate('/login')
    }
  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
        <header className='flex justify-between container mx-auto px-5 py-4 items-center'>
            <div>
               <Link to='/'>
               <img className='w-16' src={images.Logo} alt="" />
               </Link>
            </div>
            <div className='lg:hidden z-50'>
                {NavIsvisible ? (
                    <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler}/>
                ) : (
                    <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler}/>
                )}
            </div>
            <div className={`${NavIsvisible ? 'right-0' : '-right-full'} transition-all duration-300 mt-[56px] cursor-pointer lg:mt-0 bg-Dark-hard lg:bg-transparent z-[50] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed  top-0 bottom-0 lg:static gap-x-9 items-center`}>
                <ul className='text-white items-center gap-y-5 lg:text-Dark-soft flex flex-col lg:flex-row gap-x-8 font-semibold'>
                     <Link to='/'>Home</Link>
                    <li>Articles</li>
                    <li className='flex'>pages <MdKeyboardArrowDown className='mt-2'/></li>
                    <li>Pricing</li>
                    <li>Faq</li>
                    {userstate?.userinfo?.admin || <li onClick={()=> navigate('/profile')}>Profile</li>}
                    {userstate?.userinfo?.admin && <li onClick={()=> navigate('/admin')}>Admin Dashboard</li>}
                </ul>
                {userstate.userinfo ? (
                    <button onClick={LogoutHandler} className='mt-5 lg:mt-0 border-blue-500 border-2 px-6 py-2 font-semibold text-blue-500 rounded-full
                    hover:bg-blue-500 hover:text-white transition-all duration-300
                    '>Log Out</button>
                ) 
                :(<button onClick={()=> navigate('/login')} className='mt-5 lg:mt-0 border-blue-500 border-2 px-6 py-2 font-semibold text-blue-500 rounded-full
                hover:bg-blue-500 hover:text-white transition-all duration-300
                '>Sign in</button>)}
            </div>
        </header>
    </section>
  )
}

export default Header