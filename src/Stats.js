import React, { useState } from 'react';

function Stats(props) {
  /*A function that determines number of unique numbers in numbers state (props.numbers*/

  // let [stats, setStats] = useState([]);

  const helperArray = [];

  const uniqueNumbers = () => {
    for (let i = 0; i < props.numbers.length; i++) {
      if (helperArray.indexOf(props.numbers[i]) === false) {
        helperArray.push(props.numbers[i]);
        console.log(helperArray);
      }
    }
    return helperArray;
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Stats</h5>
          <p>{uniqueNumbers()}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
