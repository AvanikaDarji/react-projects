import React from 'react'
import {useSelector, useDispatch} from "react-redux";


export default function Counter() {
  //const [toggle, setToggle] = useState(false);


const dispatch = useDispatch();
const counter = useSelector(state => state.counter);
const show =  useSelector(state => state.showCounter)

const toggleCounter = ()=>{
  dispatch({type:"toggle"})

}
const increamentHandler=()=>{
dispatch({type: 'increment'})
}
const decrementHandler =()=>{
dispatch({type: 'decrement'})
}
const increseHandler=()=>{
  dispatch({type:"increase", amount: 5})
}
  return (
    <div>
    <h1>Redux Counter</h1>
   {show &&  <div>{counter} </div>}
    <div>
            <button onClick={increamentHandler}>Increment</button>
            <button onClick={increseHandler}> Increment By 5</button>
            <button onClick={decrementHandler}> Decrement</button>
    </div>
    <button onClick={toggleCounter}>Toggle Counter</button>
    
    </div>
  )
}
