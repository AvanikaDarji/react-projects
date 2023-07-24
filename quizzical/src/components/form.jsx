import React, { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import Radio from './radio.jsx'

const Form = ({
  id,
  question,
  correct,
  incorrect,
  setAnsData,
  ansData,
  check,
}) => {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    setAnswers([correct, ...incorrect])
  }, [correct])

  const handleChange = (event, id) => {
    const { name, value } = event.target
    const ansObj = {
      id: id,
      correctAns: name,
      chosenAns: value,
    }
    //console.log(ansObj)
    setAnsData((prev) => [...prev, ansObj])
  }

  const radioElements = answers.map((elem, index) => {
    return (
      <Radio
        key={index}
        id={id}
        answer={decode(elem)}
        count={index + 1}
        correctAns={correct}
        check={check}
        handleChange={handleChange}
        ansData={ansData}
      />
    )
  })

  return (
    <div className="form" id={id}>
      <h3> {decode(question)} </h3>{' '}
      <div className="form--radios"> {radioElements} </div> <hr />{' '}
    </div>
  )
}

export default Form
