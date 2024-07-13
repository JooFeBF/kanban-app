"use client"
<<<<<<< HEAD
=======
import KanbanBoard from "@/components/KanbanBoard"
import { KanbanProvider } from "@/context/kanbanContext"
>>>>>>> 7195793 (Changed to using context)
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { KanbanProvider } from "@/context/kanbanContext";
import KanbanBody from "@/components/component/kanban-body"

function KanbanPage(){
const router = useRouter()
   useEffect(() => {
<<<<<<< HEAD
    if ( !localStorage.token )
=======
    if (!localStorage.token)
>>>>>>> 7195793 (Changed to using context)
      router.push("/login") 
     } , []) 
  return(
    <KanbanProvider>
<<<<<<< HEAD
      <KanbanBody />
=======
      <KanbanBoard />
>>>>>>> 7195793 (Changed to using context)
    </KanbanProvider>
  )
}

export default KanbanPage