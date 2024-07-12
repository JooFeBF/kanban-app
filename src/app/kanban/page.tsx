"use client"
import KanbanBody from "@/components/component/kanban-body"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { loginUser } from "@/components/services/API_token"
import axiosInstance from "@/components/services/Interface_axios"

function KanbanPage(){
const router = useRouter()
console.log(localStorage.token)
   useEffect(() => {
  
    if ( !localStorage.token   )
      router.push("/login") 
     } ,  ) ; 
  return(
    <KanbanBody />
  )
}

export default KanbanPage