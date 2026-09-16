import { useState } from 'react'
import { Header } from './components/Header'
import { ButtonBase } from './components/ButtonBase'
import { Statistics } from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="Give your feedback" />
      <div style={ {display: 'flex'} }>
        <ButtonBase title="Good" onClick={() => setGood(good + 1)} />
        <ButtonBase title="Neutral" onClick={() => setNeutral(neutral + 1)} />
        <ButtonBase title="Bad" onClick={() => setBad(bad + 1)} />
      </div>

      <Header title="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App