const Part = (props) => {
    return (<p>{props.title} {props.count}</p>)
}

export const Content = (props) => {
    return (
        <>
            <Part title={props.item1.name} count={props.item1.exercises} />
            <Part title={props.item2.name} count={props.item2.exercises} />
            <Part title={props.item3.name} count={props.item3.exercises} />
        </>
    )
}