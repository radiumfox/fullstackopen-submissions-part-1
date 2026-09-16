import { useState } from 'react'
import { Header } from './components/Header'
import { ButtonBase } from './components/ButtonBase'
import { Statistics } from './components/Statistics'

const REVIEW_TO_VALUE_MAP = {
  good: 1,
  bad: -1,
  neutral: 0
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const average = total > 0 ? (REVIEW_TO_VALUE_MAP.good * good + REVIEW_TO_VALUE_MAP.bad * bad) / total : 0
  const percent = total / 100
  const positive = percent > 0 ? good / percent : 0

  const handleGoodReview = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutralReview = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadReview = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header title="Give your feedback" />
      <div style={ {display: 'flex'} }>
        <ButtonBase title="Good" onClick={handleGoodReview} />
        <ButtonBase title="Neutral" onClick={handleNeutralReview} />
        <ButtonBase title="Bad" onClick={handleBadReview} />
      </div>

      <Header title="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App