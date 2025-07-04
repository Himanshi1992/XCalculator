import React, {useState} from 'react';
import './calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [answer, setAnswer] = useState('');

     const handleClick = (value) => {
    setInput((prev) => prev + value);
  };
  
   const handleClear = () => {
    setInput('');
    setAnswer('');
  };

   const handleEquals = () => {
    if (input.trim() === '') {
      setAnswer('Error');
      return;
    }

    try{
        const evaluated = Function(`return (${input})`)();
        setAnswer(evaluated.toString()); 
    }
    catch (error) {
        setAnswer('Error');
    }
};
 return (
    <div className='div'>
        <h1>React Calculator</h1>
        <input className='calculator' type = "text" value={input} readOnly />
        <div className='result'>{answer}</div>
        <br/>
        <div className='buttons'>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('+')}>+</button>

            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('-')}>-</button>

            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('*')}>*</button>

            <button onClick={handleClear}>C</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={handleEquals}>=</button>
            <button onClick={() => handleClick('/')}>/</button>
        </div>
        

    </div>

 );
};
export default Calculator;