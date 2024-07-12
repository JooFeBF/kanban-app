"use client";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import React, { ChangeEvent } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from "../../schemes/userScheme";
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import { loginUser } from '../services/API_token';

type Inputs = {
  email: string;
  password: string;
}
export function LoginForm() {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  
  const notifyError = () => toast.error('Email or password incorrect')
  const notifySuccess = () => toast.success('Login succesfuly')
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value
    });

  };
  
  const { register, handleSubmit, formState: {errors}} = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() =>{
    if (errors.email?.message) {
      toast.error(errors.email?.message)
    } 
    if (errors.password?.message) {
        toast.error(errors.password?.message)
    }
  }, [errors.email, errors.password]);

  const onSubmit: SubmitHandler<Object> = async () => {
    try {
      const response = await loginUser(credentials.email, credentials.password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.user.id);
      
      notifySuccess();
      router.push("/kanban");
    } catch (error) {
      console.error(error)
      notifyError();
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Login</h2>
          <p className="text-muted-foreground">Enter your email and password to get started.</p>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" placeholder="Enter your email address" {...register('email')} onChange={ handleChange } />

          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" {...register('password')} onChange={ handleChange } />

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

      <Toaster  
        position="top-center"
        reverseOrder={false}
      />

    </div>
  )
}
