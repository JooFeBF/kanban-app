import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation"
import { useState , ChangeEvent, useEffect } from "react"
import { loginSchema } from "@/schemes/userScheme"
import { changeEmail , changePassword ,changeUserName , getUser} from "../services/API_token"
import { info } from "console"
import { any, object } from "zod"
import { toast, Toaster } from "react-hot-toast"



export  function Profile() {
 const [ data , setData ] = useState({})
 const [ email , setEmail ] = useState('')
 const [ password , setPassword ] = useState('')
 const [ username , setUsername ] = useState('');

 useEffect (() => {
  const getInfo = async () => {
    try {
      const {data} = await getUser();
      console.log(data)
      setData(data)
    }
    catch (error) {
      console.log(error)
    }
  }
   getInfo()
  
} , [])

  const notifyError = () => toast.error('Email or password incorrect')
  const notifySuccess = () => toast.success('Login succesfuly');
  

const { register, handleSubmit} = useForm();

const onSubmit: SubmitHandler<Object> = async () => {
  try {
    console.log(newUsername);
    console.log(data.email);
    const response = await changeUserName(newUsername, data.email);
    console.log(response)
    notifySuccess();
  } catch (error) {
    notifyError();
  }
};
  return (
    <main className="flex-1 p-6 h-full">
      <div className="bg-card p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold"> { data.username} </h3>
              <p className="text-muted-foreground">Kanban</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Update Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <form  className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="newUsername" placeholder="Ingrese Nuevo Usuario" 
                  {...register('newUsername')}/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Ingrese Nuevo Email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" 
                  />
                </div>
                <Button type="submit">Update</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

