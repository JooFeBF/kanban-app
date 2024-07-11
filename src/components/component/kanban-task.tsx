export function KanbanTask(props){
  const data = props.props
  console.log(data.title)
  console.log(data)
  return(
    <div>
      <h1>hola</h1>
      <h1>{`${data.title}`}</h1>
      <h2>{data.description}</h2>
    </div>
  )
}
export default KanbanTask