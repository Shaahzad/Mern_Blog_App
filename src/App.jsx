import React from 'react'
import Homepage from './pages/Homepage'
import {Routes, Route} from 'react-router-dom'
import ArticleDetailpage from './pages/ArticalDetail/ArticleDetailpage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Homepage/>}/>
        <Route index path='/blog/:id' element={<ArticleDetailpage/>}/>
      </Routes>
    </div>
  )
}

export default App