"use client"
import { KanbanTask } from "./kanban-task";
import axios from "axios";
import { useState, useEffect } from "react";
import { useGetColumnsQuery } from "@/api/api";


export function KanbanSection(props){
  
const [tasks, setTasks] = useState([]);

useEffect(() => {
  const fetchTasks = async () => {
    try {
      console.log("1")
      const response = await useGetColumnsQuery(11);
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