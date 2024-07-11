
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RegisterForm() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="text-muted-foreground">Enter your details to get started.</p>
        </div>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email address" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button type="submit" className="w-full">
            Continue with email
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          You already have an account?{" "}
          <Link href="#" className="font-medium underline underline-offset-4" prefetch={false}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
