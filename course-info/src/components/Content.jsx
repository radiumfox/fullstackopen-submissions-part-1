export const Content = (props) => {
    return (
        props.items.map((item) => {
            return (<p key={item.id}>{item.title} {item.count}</p>)
        })
    )
}