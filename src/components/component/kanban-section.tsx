"use client"
import { KanbanTask } from "./kanban-task";
import axios from "axios";
import { useState, useEffect } from "react";
import { group } from "console";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";


export function KanbanSection(props){
const [tasks, setTasks] = useState([]);
const data = props.props
console.log("6")
console.log(data)
/* const [Sectionlist, section]= useDragAndDrop({group:"section"}) */

return (
  <div  className="block bg-black">
    {data.tasks.length > 0 ? (
      data.tasks.map((task) => {
        return(
        <KanbanTask key={data.tasks.id} props={task}></KanbanTask>
      )}
    )) : (
      <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white  ">☺</div>
    )}
  </div>
);
}
export default KanbanSection