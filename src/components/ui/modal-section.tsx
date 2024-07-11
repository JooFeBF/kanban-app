import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card"
import { Label } from "./label"
import { Input } from "./input"
import { Button } from "./button"

export function ModalSection() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create New Section</CardTitle>
        <CardDescription>Enter a title for your new Kanban section.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter section title" />
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
