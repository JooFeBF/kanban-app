"use client"
import axios from "axios";
import { KanbanSection } from "./kanban-section";
import { useEffect, useState} from "react";

export function KanbanSectionGenerator(){

  const [sections, setSections] = useState([])
  useEffect(() => {
    const fetchSections = async () => {
      try {
        console.log("1");
        const response = await axios.get(
          "https://kanban-con-typescript.onrender.com/api/colums/2",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzksImVtYWlsIjoieWVpQGhvdG1haWwuY29tIiwiaWF0IjoxNzIwNzEwNTA0LCJleHAiOjE3MjA3MzU3MDR9.DoWfD3slFD_-yiovnu6pI82D8O59T18WMuWCO3-Q2As",
            },
          }
        );
        console.log("2");
        console.log(response.data);
        setSections(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        console.log("3");
        console.error("Error fetching tasks:", error);
      }
    };

    fetchSections                 ();
  }, []);
  


  return(
      <div>
    <div>duro</div>

    {SpeechRecognitionResult.length > 0 ? (
      sections.map((section) => {
        return <KanbanSection key={section.id} props={section}></KanbanSection>;
      })
    ) : (
      <div>sapo</div>
    )}
  </div>
  )
}