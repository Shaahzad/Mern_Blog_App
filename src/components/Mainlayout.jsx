import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Mainlayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Mainlayout