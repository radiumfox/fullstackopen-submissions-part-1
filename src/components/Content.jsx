export const Content = (props) => {
    return (
        props.items.map((item) => {
            return (<p>{item.title} {item.count}</p>)
        })
    )
}