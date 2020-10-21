import React from 'react'
import './App.css'

// principle, rate of annual interest, and number of years
// will display the total_principle

export function calculatePrinciple(principle, interest_rate, years) {
  if (years < 0 && interest_rate < 0 && principle < 0) {
    throw new Error(
      `Can't calculate total_principle if values are less than zero`,
    )
  }

  const getRate = interest_rate / 100
  const getYears = years
  const getPrinciple = principle
  const getTotal = getPrinciple * Math.max(1 + getRate * getYears)

  return getTotal
}

function interestReducer(state, action) {
  const { type, payload } = action
  return { ...state, [type]: payload }
}

const initialState = {
  principle: 5000,
  interest_rate: 2.5,
  years: 5,
}

function useInterestCalculator() {
  const [state, dispatch] = React.useReducer(interestReducer, initialState)

  const { principle, interest_rate, years } = state

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({
      type: 'total_principle',
      payload: calculatePrinciple(principle, interest_rate, years),
    })
  }

  return [state, { handleSubmit, dispatch }]
}

function App() {
  const [state, { handleSubmit, dispatch }] = useInterestCalculator()
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="principle">Principle: </label>
        <input
          onChange={e =>
            dispatch({ type: 'principle', payload: e.target.value })
          }
          id="principle"
        />
        <label htmlFor="interest_rate">Rate: </label>
        <input
          onChange={e =>
            dispatch({ type: 'interest_rate', payload: e.target.value })
          }
          id="interest_rate"
        />
        <label htmlFor="years">Years: </label>
        <input
          onChange={e => dispatch({ type: 'years', payload: e.target.value })}
          id="years"
        />
        <input type="submit" />
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default App
