export function KanbanTask(props){
  const data = props.props
  console.log(data.title)
  console.log(data)
  return(
    <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white border-2 border-sky-500 ">
      <h1 className="mb-2 text-xl font-medium leading-tight">{`${data.title}`}</h1>
      <h2 className="mb-4 text-base overflow-hidden">{data.description}</h2>
    </div>
  )
}
export default KanbanTask