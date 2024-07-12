import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card"
import { Label } from "./label"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Button } from "./button"

export function ModalTask() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>New Task</CardTitle>
        <CardDescription>Create a new section for your Kanban board.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter Task title" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter Task description" />
          </div>
          <div className="flex justify-end">
            <Button variant="outline" className="mr-2">
              Cancel
            </Button>
            <Button type="submit">Create Section</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
