import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Users from './users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('button2 clicked');
  }
  

  return (
    <>
      
      <h1>React  core concepts 2</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me Now</button>
      <Counter></Counter>
      <Users></Users>
      <Friends></Friends>
     
    </>
  )
}

export default App
