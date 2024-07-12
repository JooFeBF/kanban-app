"use client"
import KanbanBoard from "@/components/KanbanBoard"
import { useEffect } from "react"
import { useRouter } from "next/navigation"


function KanbanPage(){
const router = useRouter()
   useEffect(() => {
  
    if ( !localStorage.token   )
      router.push("/login") 
     } ,  ) ; 
  return(
    <KanbanBoard />
  )
}

export default KanbanPage