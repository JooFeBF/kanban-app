"use client"
import axios from "axios";
import { KanbanSection } from "./kanban-section";
import { useEffect, useState} from "react";
import {dragAndDrop, useDragAndDrop} from "@formkit/drag-and-drop/react"

export function KanbanSectionGenerator(){

  const [sections, setSections] = useState([])
  useEffect(() => {
    const fetchSections = async () => {
      try {
        console.log("1");
        const response = await axios.get(
          "https://kanban-con-typescript.onrender.com/api/sections",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTcyMDc0OTQ0NywiZXhwIjoxNzIwNzc0NjQ3fQ.ZhdCHxZDryJAcZI9SyVx-Ev6U3njous9pc2rPJQO1U0",
            },
          }
        );
        console.log("2, hola");
        console.log(response.data);
        console.log("2, adios");

        setSections(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        console.log("3");
        console.error("Error fetching tasks:", error);
      }
    };

    fetchSections();
    console.log("uy")
    console.log(sections)
  }, []);
 /*  const [parent, sectiones] = useDragAndDrop(sections)  */
  

  return(
      <ul /* ref={parent} */  className="flex overflow-hidden m">
    {sections.length > 0 ? (
      sections.map((section) => {
        return (
        <li key={section.column.id} /* data-label={section.column.id} */ className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white border-solid border-2 border-sky-500 w-80">
          <h1 className="mb-2 text-xl leading-tight font-bold overflow-hidden">{`${section.column.title}`}</h1>
          
          {section.tasks.length > 0 ? 
          (section.tasks.map((task) => {
        return(
          <div key={task.id} className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white border-2 border-sky-500 ">
          <h1 className="mb-2 text-xl font-medium leading-tight">{`${task.title}`}</h1>
          <h2 className="mb-4 text-base overflow-hidden">{task.description}</h2>
        </div>
      )}
    )) : (
      <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white  ">☺</div>
    )}

          </li>
      )})
    ) : (
      <div>sapo</div>
    )}
  </ul>
  )
}