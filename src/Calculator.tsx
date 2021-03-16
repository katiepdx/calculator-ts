import { useState } from 'react'
import { calculation } from './math-utils'

interface CalculatorProps {
  symbol: string,
  buttonName: string
}

const Calculator = ({ symbol, buttonName }: CalculatorProps) => {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [answer, setAnswer] = useState(0)

  const handleNum1Change = (e: any) => {
    setNum1(e.target.value)
  }
  const handleNum2Change = (e: any) => {
    setNum2(e.target.value)
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    if (num1 === null || num2 === null) alert('Please enter a number')

    const total = calculation(symbol, num1, num2)
    if(total) setAnswer(total)
  
  }
  return (
    <div>
      <label htmlFor="number1">
        <input type="number" name="number1" onChange={handleNum1Change} />
      </label>
      {symbol}
      <label htmlFor="number2">
        <input type="number" name="number2" onChange={handleNum2Change} />
      </label>

      <div>{answer}</div>
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  )
}

export default Calculator
