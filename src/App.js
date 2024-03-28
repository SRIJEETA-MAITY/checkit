

import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();
    if (height === 0 || weight === 0) {
      alert('please enter a valid height and weight');
    } else {
      const bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 25) {
        setMessage('you are underweight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('you are a healthy weight');
      } else {
        setMessage('you are overweight');
      }
    }

    // Reload the page after the calculations
    
  };

  const reload = () => {
    window.location.reload()
  }


  return (

    
    <div className="App">
      
      <h1>BMI CALCULATER</h1>
      <div className="container">
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter the weight"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height (inch)</label>
            <input
              type="number"
              placeholder="Enter the height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              submit
            </button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is:</h3>
            <p>{bmi}</p>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
