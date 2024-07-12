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
import { useState , ChangeEvent } from "react"
import { loginSchema } from "@/schemes/userScheme"
import { changeEmail , changePassword ,changeUserName , getUser} from "../services/API_token"
export  function Profile() {

  console.log(localStorage)
  const router = useRouter()

  const getInfo = async () => {
    try {
      const info = await getUser();
      console.log(info)
    }
    catch {
      console.log("error")
    }
  }
  getInfo ()
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
              <h3 className="text-lg font-semibold">.user</h3>
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
              <form  className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Ingrese Nuevo Usuario" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Ingrese Nuevo Email"/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
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

