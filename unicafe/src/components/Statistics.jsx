

export const Statistics = ({ good = 0, neutral = 0, bad = 0, total = 0, average = 0, positive = 0 }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </div>
  )
}