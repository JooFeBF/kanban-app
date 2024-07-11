import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LoginForm() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Login</h2>
          <p className="text-muted-foreground">Enter your email and password to get started.</p>
        </div>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email address" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button type="submit" className="w-full">
            Get started
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          {"You don't have an account?"}
          <Link href="#" className="font-medium underline underline-offset-4" prefetch={false}>
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}
