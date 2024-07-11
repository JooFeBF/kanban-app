"use client";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import React, { ChangeEvent } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { userScheme } from "../../schemes/userScheme";

type Inputs = {
  email: string;
  password: string;
}

export function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  }
)

console.log(credentials);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value
    });
  };

  const { register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
    resolver: zodResolver(userScheme),
  })

  const onSubmit: SubmitHandler<Object> = async (data) => {
    try {
      console.log(credentials);
      const response = await axios.post("https://kanban-con-typescript.onrender.com/api/user/login", credentials);
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
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
            {
              errors.email?.message && <p>{errors.email?.message}</p>
            }
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" {...register('password')} onChange={ handleChange } />
            {
              errors.password?.message && <p>{errors.password?.message}</p>
            }
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
    </div>
  )
}
