import React from 'react'
import images from '../constants/images'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


const Footer = () => {
  return (
    <section className='bg-Dark-hard'>
  <footer className='container mx-auto grid grid-cols-10
   px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12
   lg:grid-cols-10 lg:gap-x-10
   '>
   <div className='col-span-5 md:col-span-4 lg:col-span-2'>
  <h3 className='text-Dark-light font-bold md:text-lg'>Products</h3>
  <ul className='text-sm text-[#959EAD] mt-5 space-y-4 md:text-base'>
   <li><a href="/">LandingPage</a></li>
   <li><a href="/">Features</a></li>
   <li><a href="/">Documentation</a></li>
   <li><a href="/">Referral Program</a></li>
   <li><a href="/">Pricing</a></li>
  </ul>
   </div>
   <div className='col-span-5 md:col-span-4 lg:col-span-2'>
  <h3 className='text-Dark-light font-bold md:text-lg'>Services</h3>
  <ul className='text-sm text-[#959EAD] mt-5 space-y-4 md:text-base'>
   <li><a href="/">Documentation</a></li>
   <li><a href="/">Design</a></li>
   <li><a href="/">Themes</a></li>
   <li><a href="/">Illustrations</a></li>
   <li><a href="/">Ui Kit</a></li>
  </ul>
   </div>
   <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
  <h3 className='text-Dark-light font-bold md:text-lg'>Company</h3>
  <ul className='text-sm text-[#959EAD] mt-5 space-y-4 md:text-base'>
   <li><a href="/">About</a></li>
   <li><a href="/">Terms</a></li>
   <li><a href="/">Privacy Policy</a></li>
   <li><a href="/">Carrers</a></li>
  </ul>
   </div>
   <div className='col-span-5 md:col-span-4 lg:col-span-2'>
  <h3 className='text-Dark-light font-bold md:text:lg'>More</h3>
  <ul className='text-sm text-[#959EAD] mt-5 space-y-4 md:text-base'>
   <li><a href="/">Documentation</a></li>
   <li><a href="/">License</a></li>
   <li><a href="/">Changelog</a></li>
  </ul>
   </div>
   <div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2'>
    <img src={images.Logo} alt="Logo" className='brightness-0 invert mx-auto md:mx-0'/>
    <p className='text-center text-Dark-light mt-5 text-sm 
    md:text-base  md:text-left lg:text-sm
    '>Build A Modern and Creative Website With Crealand</p>
    <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start'>
      <li>
        <a href="/"><FaSquareXTwitter className='w-6 h-6'/></a>
      </li>
      <li>
        <a href="/"><FaYoutube className='w-6 h-6'/></a>
      </li>
      <li>
        <a href="/"><FaFacebook className='w-6 h-6'/></a>
      </li>
      <li>
        <a href="/"><FaInstagram className='w-6 h-6'/></a>
        </li>
      <li>
        <a href="/"><FaLinkedin className='w-6 h-6'/></a>
      </li>
    </ul>
   </div>
<div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
<div className='bg-primary text-white p-3 rounded-full'>
<FaHeart className='w-7 h-auto'/>
</div>
<p className='text-Dark-light font-bold italic'>© 2024 All rights reserved</p>
</div>
  </footer>
    </section>
  )
}

export default Footer