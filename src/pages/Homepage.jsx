import React from 'react'
import Mainlayout from '../components/Mainlayout'
import Hero from './Container/Hero'
import Article from './Container/Article'
import CTA from './Container/CTA'
const Homepage = () => {
  return (
    <Mainlayout>
      <Hero/>
      <Article/>
      <CTA/>
    </Mainlayout>
  )
}

export default Homepage