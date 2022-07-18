import React from 'react'
import { useState } from 'react';
import { addcounter, subcounter } from '../Redux/action';
import { store } from '../Redux/store'

const Counter = () => {
   const [state,setState] = useState(0)
   const {counter} = store.getState();
   const { dispatch } = store;

   const handleAdd=()=>{
        dispatch(addcounter(1))
        setState(prev=>prev+1)
   }
   const handleSub=()=>{
    dispatch(subcounter(1))
    setState(prev=>prev-1)
}
  return (
    <>
        <h1>Counter:{counter}</h1>
        <div style={{display:"flex",gap:"1rem",justifyContent:"center"}}>
            <button onClick={handleAdd} >Inc</button>
            <button disabled={state<=0} onClick={handleSub} >Dec</button>
        </div>
    </>
  )
}

export {Counter}