import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../../redux/type'
function CalculatorPage() {
    const dispatch = useDispatch()
    let number = useSelector(state => state.number)
    let number2 = useSelector(state => state.number2)
    const change1 =(e)=>{
        let number = Number(e.target.value)
        dispatch({
            type: types.ONCHANGE1,
            payload: number
        })
    }
    const change2 =(e)=>{
        let number = Number(e.target.value)
        dispatch({
            type: types.ONCHANGE2,
            payload: number
        })
    }
    const  plus =()=>{
        dispatch({
            type: types.PLUS
        })
    }
    const minus =()=>{
        dispatch({
            type: types.MINUS
        })
    }
    const devide =()=>{
        dispatch({
            type: types.DEVIDE
        })
    }
    const multiply =()=>{
        dispatch({
            type: types.MULTIPLY
        })
    }
    const result = useSelector(state=>state.result)
    
  return (
    <div>
        <h1>{result}</h1>
        <input type="number"  onChange={change1} />
        <input type="number" onChange={change2} />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={devide}>/</button>
        <button onClick={multiply}>*</button>
    </div>
  )
}

export default CalculatorPage