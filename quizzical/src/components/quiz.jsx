import React, { useState, useEffect } from 'react'
import Form from './form.jsx'
import { nanoid } from 'nanoid'
import { createBrowserRouter , RouterProvider } from "react-router-dom"

/*const router = createBrowserRouter([{
  path:"/form", element: <Form/>
}])*/
export default function Quiz() {
  const [questions, setQuestions] = useState([])
  const [ansData, setAnsData] = useState([])
  const [check, setCheck] = useState(0)
  const [notFullyAns, setNotFullAns] = useState(false)
  const [restart, setRestart] = useState(false)
  const [count, setCount] = useState(0)
  const [timeTaken, setTimer] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  const checkAns = () => {
    console.log('check true')
    if (!check) {
      if (ansData.length < 5) {
        setNotFullAns(true)
      } else {
        // console.log('clear Interval')
        clearInterval(intervalId)
        setCheck((prev) => prev + 1)
        /* ansData.filter((ans) =>
          ans.correctAns == ans.chosenAns
            ? setCount((prev) => prev + 1)
            : setCount((count) => 0),
        )*/
      }
    } else {
      setRestart((prev) => !prev)
    }
  }
  useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple',
    )
      .then((response) => response.json())
      .then((data) => setQuestions(data.results))

    setTimer(0)
    let interval = setInterval(function () {
      setTimer((prev) => ++prev)
    }, 1000)
    setIntervalId(interval)
    // return clearInterval(interval)
  }, [restart])

  const quizes = questions.map((ele, index) => {
    return (
      <Form
        question={ele.question}
        id={nanoid()}
        correct={ele.correct_answer}
        incorrect={ele.incorrect_answers}
        setAnsData={setAnsData}
        ansData={ansData}
        check={check}
      />
    )
  })

  return (
    <main>
      {quizes.length > 0 ? (
        <div>
          <span className="form--time-duration"> {timeTaken}s </span>
          <div className="form--parent"> {quizes} </div>
          {notFullyAns && (
            <span className="form--warning">
              {' '}
              You haven't done all the quizzes
            </span>
          )}
          <button onClick={checkAns}> Check Ans </button>
          {check && (
            <span className="form--answer">
              You got total {count} correct answers
            </span>
          )}
        </div>
      ) : (
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="loading.."
        />
      )}
    </main>
  )
}
