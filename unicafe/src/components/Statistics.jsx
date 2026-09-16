const StatisticLine = ({ text, value }) => {
  return (<p>{text}: {value}</p>)
}

export const Statistics = ({ good = 0, neutral = 0, bad = 0, total = 0, average = 0, positive = 0 }) => {
  if(total > 0) {
    return (
      <div>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />

        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={`${positive} %`} />
      </div>
    )
  }

  return (
    <p>No feedback given</p>
  )
  
}