import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WelcomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Welcome to Kanba</h1>
          <p className="text-muted-foreground">
            Streamline your workflow and boost productivity with our powerful project management tool.
          </p>
          <Button type="submit" className="w-full">
            Start
          </Button>
        </div>
      </div>
    </div>
  )
}

