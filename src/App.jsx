import React from 'react'
import Homepage from './pages/Homepage'
import {Routes, Route} from 'react-router-dom'
import ArticleDetailpage from './pages/ArticalDetail/ArticleDetailpage'
import Register from './pages/register/Register'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Homepage/>}/>
        <Route  path='/blog/:id' element={<ArticleDetailpage/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App