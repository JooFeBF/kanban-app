"use client"
import KanbanBody from "@/components/component/kanban-body"
import { useEffect } from "react"
import { useRouter } from "next/navigation"


function KanbanPage(){
const router = useRouter()
   useEffect(() => {
  
    if ( !localStorage.token   )
      router.push("/login") 
     } ,  ) ; 
  return(
    <KanbanBody />
  )
}

export default KanbanPage