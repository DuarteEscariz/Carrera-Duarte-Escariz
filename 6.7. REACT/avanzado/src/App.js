
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment } from './counterSlice';//importado desde counterSlice, funcion creada por mi 
import './App.css';
import { applyMiddleware } from '@reduxjs/toolkit';

export function Counter(){
  const count =useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return(
    <div>
      <button onClick={()=> dispatch(increment())}> Incrementar</button>
      <span> {count}</span>
      <button onClick={()=> dispatch(decrement())}> Disminuir</button>
    </div>
  )
}
export default Counter;

