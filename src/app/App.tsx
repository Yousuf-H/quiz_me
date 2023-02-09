import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Quiz from '../pages/quiz/Quiz'
import Result from '../pages/result/Result'
import './app.styles.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>QUIZ ME</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
