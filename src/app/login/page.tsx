"use client"
import { LoginForm } from "@/components/component/login-form";
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function LoginPage() {
  const router = useRouter()
   useEffect(() => {
    if ( localStorage.token )
      router.push("/kanban") 
     } ,  ) ; 
  return (
    <main className="flex">
      <LoginForm />
    </main>
  );
}