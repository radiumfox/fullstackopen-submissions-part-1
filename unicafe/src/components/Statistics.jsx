const StatisticLine = ({ text, value }) => {
  return (<tr><td>{text}:</td><td>{value}</td></tr>)
}

export const Statistics = ({ good = 0, neutral = 0, bad = 0, total = 0, average = 0, positive = 0 }) => {
  if(total > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />

          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={`${positive} %`} />
        </tbody>
      </table>
    )
  }

  return (
    <p>No feedback given</p>
  )
  
}