import React from 'react'
import Homepage from './pages/Homepage'
import {Routes, Route} from 'react-router-dom'
import ArticleDetailpage from './pages/ArticalDetail/ArticleDetailpage'
import Register from './pages/register/Register'
import {Toaster} from "react-hot-toast"
import Login from './pages/login/Login'
import ProfilePage from './pages/profile/Profile'
import AdminLayout from './pages/Admin/AdminLayout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Homepage/>}/>
        <Route  path='/blog/:slug' element={<ArticleDetailpage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/admin' element={<AdminLayout/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App