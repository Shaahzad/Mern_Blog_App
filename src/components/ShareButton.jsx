import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRedditSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


const ShareButton = ({uri, title}) => {
  return (
    <div className='w-full flex justify-between'>
        <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>
         <FaFacebookSquare className='text-[#3B5998] w-12 h-auto'/>
        </a>
        <a href="https://www.linkedin.com/in/mshahzad-/" target='_blank' rel='noreferrer'>
         <FaLinkedin className='text-[#0E76A8] w-12 h-auto'/>
        </a>
        <a href="https://www.reddit.com/?rdt=33879" target='_blank' rel='noreferrer'>
         <FaRedditSquare className='text-[#FF4500] w-12 h-auto'/>
        </a>
        <a href="https://web.whatsapp.com/" target='_blank' rel='noreferrer'>
         <FaSquareWhatsapp className='text-[#25D366] w-12 h-auto'/>
        </a>


    </div>
  )
}

export default ShareButton