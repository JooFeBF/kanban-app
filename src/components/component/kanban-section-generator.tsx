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
          "https://kanban-con-typescript.onrender.com/api/section/2",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzksImVtYWlsIjoieWVpQGhvdG1haWwuY29tIiwiaWF0IjoxNzIwNzEwNTA0LCJleHAiOjE3MjA3MzU3MDR9.DoWfD3slFD_-yiovnu6pI82D8O59T18WMuWCO3-Q2As",
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
  }, []);
  
  const [parent, section] = useDragAndDrop([])

  return(
      <div ref={parent} className="flex overflow-hidden m">

    {sections.length > 0 ? (
      sections.map((section) => {
        return (
        <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white border-solid border-2 border-sky-500 w-80">
          <h1 className="mb-2 text-xl leading-tight font-bold overflow-hidden">{`${section.title}`}</h1>
          <KanbanSection key={section.id} props={section}></KanbanSection>
          </div>
      )})
    ) : (
      <div>sapo</div>
    )}
  </div>
  )
}