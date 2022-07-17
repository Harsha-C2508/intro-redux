import React from 'react'
import './App.css';
import {useDispatch, useSelector } from 'react-redux'
function App() {
 const count = useSelector((state) => state.count)
 const dispatch = useDispatch()
 console.log(count)
 const handleAdd=()=>{
      dispatch({
        type:'INCREMENT_AMOUNT'
      })
 }
 const handleSub=()=>{
  dispatch({
    type:'DECREMENT_AMOUNT'
  })
}
  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onclick={handleAdd} >Add</button>
      <button onclick={handleSub}>Sub</button>
    </div>
  );
}

export default App;
