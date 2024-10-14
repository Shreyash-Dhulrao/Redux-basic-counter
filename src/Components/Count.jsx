import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrease, Increase, incrementByValue, Reset } from '../Features/counter/countSlice'

const Count = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const [numbers, setNumbers] = useState(0)

    const IncrementValue = ()=>{
        dispatch(Increase())
    }
    const DecrementValue = ()=>{
        dispatch(Decrease())
    }
    const ResetValue = ()=>{
        dispatch(Reset())
    }
    const newValue = (e)=>{
        dispatch(incrementByValue(numbers))
    }
  return (
    <div>
        <button onClick={IncrementValue} aria-label="Increment value">+</button>
        <p>Count: {count}</p>
        <button onClick={DecrementValue}>-</button>
        <br />
        <br />
        <button onClick={ResetValue}>Reset</button>
        <br /><br />
        <input type="Number" placeholder='Enter amount' value={numbers} onChange={(e)=> setNumbers(e.target.value)} />
        <button onClick={newValue}>Increment by input</button>
    </div>
  )
}

export default Count
