const Part = (props) => {
  return (<p>{props.title} {props.count}</p>)
}

export const Content = (props) => {
  return (
    <>
      <Part title={props.parts[0].name} count={props.parts[0].exercises} />
      <Part title={props.parts[1].name} count={props.parts[1].exercises} />
      <Part title={props.parts[2].name} count={props.parts[2].exercises} />
    </>
  )
}