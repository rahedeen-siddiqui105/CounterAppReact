import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(2)
  const [direction, setDirection] = useState('up')

  function increment() {
    setDirection('up')
    setCount(count + 1)
  }

  function decrement() {
    if (count > 0) {
      setDirection('down')
      setCount(count - 1)
    }
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className="card">
      <div className="stepper">
        <button className="chevron" onClick={decrement} aria-label="Decrease">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span key={count} className={`count slide-${direction}`}>
          {count}
        </span>

        <button className="chevron" onClick={increment} aria-label="Increase">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <button className="reset" onClick={reset} aria-label="Reset">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default App