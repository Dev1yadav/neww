import React, { useState } from 'react'
import Home from './Home';

export default function App(hvhv) {
  console.log(hvhv)
  // let count=0;
 let[count,setcount]= useState("bhopal");
 let[color,setcolor]=useState("white");
  function fun1()
  {
    setcount("indore")
  }
  function fun2()
  {
    setcolor("green");
  }
  return (

    <div style={{backgroundColor:color,width:"100vw"}}>
      <p>{hvhv.user}</p>
      <p>{count}</p>

      <button onClick={fun1}>add</button>
      <button onClick={fun2}>color</button>
      <Home/>
    </div>
  )
}
