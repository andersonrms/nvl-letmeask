import { useState } from 'react'
export const Button = () => {
  // let count = 0;'

  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1);

    console.log(counter);
  }

  return (
    <button onClick={increment}>{counter}</button>
  )
} 