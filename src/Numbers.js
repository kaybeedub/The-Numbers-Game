import React, { useState } from 'react';
import Stats from './Stats';

function Numbers() {
  let [numbers, setNumber] = useState([]);
  const renderNumber = () => {
    const randomNumber = Math.round(Math.random() * 10);
    const newNums = [randomNumber, ...numbers];
    setNumber(newNums);
  };
  const evenNums = numbers.filter(number => number % 2 === 0);
  const oddNums = numbers.filter(number => number % 2 === 1);

  const numbersRendered = numbers.map(number => <li>{number}</li>);
  const evenNumbersRendered = evenNums.map(number => <li>{number}</li>);
  const oddNumbersRendered = oddNums.map(number => <li>{number}</li>);

  return (
    <div>
      <h1>The Numbers Games ({numbers.length})</h1>
      <Stats numbers={numbers} />
      <div>
        <div>
          <button onClick={renderNumber}>Add Number</button>
        </div>
        <h3>All ({numbers.length})</h3>
        <ul>{numbersRendered}</ul>
        <h3>Even ({evenNums.length})</h3>
        <ul>{evenNumbersRendered}</ul>
        <h3> Odd ({oddNums.length})</h3>
        <ul>{oddNumbersRendered}</ul>
      </div>
    </div>
  );
}

export default Numbers;
