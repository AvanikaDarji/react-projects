import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quiz from './components/quiz.jsx'
import Form from './components/form.jsx'
import quiz from "./components/quiz.jsx"
import HomePage from "./components/home.jsx"


import './App.css'

const router= createBrowserRouter([
  {path:"/", element:<HomePage/> },
  {path:"/quiz" , element:<Quiz/>}
])



/*function App() {
  const [showQuestions, setStatus] = useState(false)
  
  const displayQuiz = () => {
    setStatus(true)
  }

  return (
    <main className="main">
      <div>
       
          <div>
            <h1> Quizzical Trivia </h1>
            <p>Some description if needed</p>
            <Link to="/form">Click</Link>
          </div>
      
      </div>
    </main>
  )
}*/
function App(){
  return <RouterProvider router={router} />
    
}

export default App
