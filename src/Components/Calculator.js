import React, { useState } from 'react';
//import { Fa-minus } from "@react-icons/all-files/fa/Fa-minus";
import {FaMinus,FaPlus,FaAsterisk } from "react-icons/fa";
import {RxSlash} from "react-icons/rx"

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateInput = () => {
    // Implement your validation logic here
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
      setErrorMessage(<>error!<br></br>Num1 Cannot Be Empty</>);
      //setErrorMessage('Num1 not empty');

      return false;
    }
    setErrorMessage('');
    setSuccessMessage('Success!');
    return true;
  };

  const performCalculation = () => {
    if (!validateInput()) {
      return;
    }

    let calculatedResult;
    switch (operation) {
      case 'add':
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divide':
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        return;
    }
    setResult(calculatedResult);
  };

  return (
    <div className="calculator container">
      <h1>React Calculator</h1>
      <div><input type="text" placeholder='Num 1' value={num1} onChange={(e) => setNum1(e.target.value)} /></div>
      <div><input type="text" placeholder='Num 2' value={num2} onChange={(e) => setNum2(e.target.value)} /></div>
      <div className='button'>
        <button onClick={() => { setOperation('add'); performCalculation(); }}><FaPlus/></button>
        <button onClick={() => { setOperation('subtract'); performCalculation(); }}><FaMinus/></button>
        <button onClick={() => { setOperation('multiply'); performCalculation(); }}><FaAsterisk/></button>
        <button onClick={() => { setOperation('divide'); performCalculation(); }}><RxSlash/></button>
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {result && <div className="success">{successMessage}<br/>Result - {result}</div>}
    </div>
  );
};

export default Calculator;
