"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { KanbanProvider } from "@/context/kanbanContext";
import KanbanBody from "@/components/component/kanban-body"

function KanbanPage(){
const router = useRouter()
   useEffect(() => {
    if ( !localStorage.token )
      router.push("/login") 
     } ,  ) ; 
  return(
    <KanbanProvider>
      <KanbanBody />
    </KanbanProvider>
  )
}

export default KanbanPage