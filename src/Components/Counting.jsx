import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../Redux/counter'
const Counting = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <>   
    <div>
        <h1 className='text-center'>{count}</h1>
    </div>    
 

    <div className='mx-auto col-6 text-center'>
        <button onClick={()=>dispatch(increment())} className='btn btn-primary me-3'>Increment</button>
        <button onClick={()=>dispatch(decrement())} className='btn btn-danger me-3'>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(10))} className='btn btn-warning me-3'>Increment by 10</button>
    </div>
  
        
    </>
  )
}

export default Counting