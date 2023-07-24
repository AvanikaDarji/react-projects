import React from 'react'
import {Link} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

export default function home() {
  return (
     <main className="main">
      <div>
       
          <div>
            <h1> Quizzical Trivia </h1>
            <p>Some description if needed</p>
            <Link to="/quiz">Click</Link>
          </div>
      
      </div>
    </main>
  )
}
