import React, { useState }  from 'react';

const [count, setCount] = useState(0);

// Array Destructuring
const colors = ['red', 'green', 'blue'];
const [myColor, yourColor] = colors;

console.log(myColor); // 'red'
console.log(yourColor); // 'green'


const useSomething = (initialState) => {
  let state = initialState;
  const setState = (newState) => {
    console.log('Dispatch SetStateAction,', newState);
  };

  return [state, setState];
}

const [appleCount, setAppleCount] = useSomething(1);
const [balloonCount, setBallonCount] = useSomething();

console.log(appleCount); // 1;
setAppleCount(appleCount + 2); // Dispatch SetStateAction, 3

console.log(balloonCount); // undefined;
setBallonCount(2); // Dispatch SetStateAction, 2
