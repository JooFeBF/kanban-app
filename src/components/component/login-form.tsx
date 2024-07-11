"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast, { Toaster } from 'react-hot-toast'

export function LoginForm() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const notifyError = () => toast.error('Email or password incorrect', { icon: '❌' })
  const notifySuccess = () => toast.success('Login succesfuly', { icon: '🎉' })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value
    });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://kanban-con-typescript.onrender.com/api/user/login", credentials);
      notifySuccess()
      router.push('/kanban');
    } catch (error) {
      console.error(error)
      notifyError()
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Login</h2>
          <p className="text-muted-foreground">Enter your email and password to get started.</p>
        </div>
        <form className="grid gap-4" onSubmit={ handleSubmit }>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email address" onChange={ handleChange } />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" onChange={ handleChange } />
          </div>
          <Button type="submit" className="w-full">
            Get started
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          {"You don't have an account? "}
          <Link href="/register" className="font-medium underline underline-offset-4" prefetch={false}>
            Register
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
