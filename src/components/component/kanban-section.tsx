"use client"
import { KanbanTask } from "./kanban-task";
import axios from "axios";
import { useState, useEffect } from "react";
import { useGetColumnsQuery } from "@/api/api";


export function KanbanSection(){
const [tasks, setTasks] = useState([]);

useEffect(() => {
  const fetchTasks = async () => {
    try {
      console.log("1")
      const response = await axios.get(
        `https://kanban-con-typescript.onrender.com/api/cards/11`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzksImVtYWlsIjoieWVpQGhvdG1haWwuY29tIiwiaWF0IjoxNzIwNzEwNTA0LCJleHAiOjE3MjA3MzU3MDR9.DoWfD3slFD_-yiovnu6pI82D8O59T18WMuWCO3-Q2As",
          },
        }
      );
      console.log("2")
      console.log(response.data);
      setTasks(response.data); // Actualiza el estado con los datos recibidos
    } catch (error) {
      console.log("3")
      console.error("Error fetching tasks:", error);
    }
  };

  fetchTasks();
}, []);
return (
  <div>
    <div>duro</div>

    {tasks.length > 0 ? (
      tasks.map((task) => {
        return <KanbanTask key={task.id} props={task}></KanbanTask>;
      })
    ) : (
      <div>sapo</div>
    )}
  </div>
);
}
export default KanbanSection