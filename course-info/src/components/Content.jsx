const Part = (props) => {
    return (<p>{props.title} {props.count}</p>)
}

export const Content = (props) => {
    return (
        <>
            <Part title={props.item1.title} count={props.item1.count} />
            <Part title={props.item2.title} count={props.item2.count} />
            <Part title={props.item3.title} count={props.item3.count} />
        </>
    )
}