import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

import './App.css'
import Number from './components/number.jsx'

function App() {
  //const { width, height } = useWindowSize()
  const generateNewDie = () => {
    return {
      value: Math.floor(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }
  const allNewDice = () => {
    let array = []
    for (let i = 0; i < 10; i++) {
      array.push(generateNewDie())
    }
    return array
  }
  const changeDice = () => {
    array.map((dice) => {
      !dice.isHeld ? (dice.value = Math.floor(Math.random() * 6)) : dice.value
    })
  }
  const [dice, setDice] = useState(allNewDice())
  const [status, setStatus] = useState(false)

  useEffect(() => {
    // console.log('array changed')
    const cheKDice = dice.every((item) => {
      return item.isHeld == true
    })
    const firstValue = dice[0].value
    const allSameValue = dice.every((die) => die.value === firstValue)

    if (cheKDice && allSameValue) {
      setStatus(true)
      console.log('You won')
    }
  }, dice)

  const rollDice = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie()
      }),
    )
  }

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      }),
    )
  }

  const diceElements = dice.map((ele, index) => (
    <Number
      key={ele.id}
      number={ele.value}
      isHeld={ele.isHeld}
      holdDice={() => {
        holdDice(ele.id)
      }}
    />
  ))

  return (
    <main>
      {status && <Confetti />}
      <h1 className="heading"> Tenzies </h1>
      <p className="subheading">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      {status && <p className="subheading"> You won!!!!!</p>}
      <div className="numbers">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {status ? 'New game' : 'Roll'}
      </button>
    </main>
  )
}

export default App
