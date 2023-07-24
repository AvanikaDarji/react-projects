import React from 'react'
import { nanoid } from 'nanoid'

function Radio({
  correctAns,
  id,
  count,
  answer,
  handleChange,
  check,
  ansData,
}) {
  let className = ''

  if (check) {
    if (correctAns == answer) {
      className = 'form--true'
    } else if (ansData.some((ans) => ans.chosenAns == answer)) {
      console.log('false')
      className = 'form--false'
    } else {
      className = ''
    }

    return (
      <div className="form-radio-parent">
        <input
          type="radio"
          id={id + count}
          value={answer}
          name={correctAns}
          onChange={handleChange}
          className={`form-radio radio${count}`}
          disabled
        />
        <label
          htmlFor={id}
          className={`form--label label${count} ${className}`}
          disabled
        >
          {answer}{' '}
        </label>{' '}
      </div>
    )
  } else {
    return (
      <div className="form-radio-parent unchecked">
        <input
          type="radio"
          id={id + count}
          value={answer}
          name={correctAns}
          className={`form-radio radio${count}`}
          onChange={(event) => handleChange(event, id + count)}
        />{' '}
        <label htmlFor={id + count} className={`form--label label${count}`}>
          {answer}
        </label>
      </div>
    )
  }
}

export default Radio
