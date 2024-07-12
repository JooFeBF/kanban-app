import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XIcon } from "@/components/ui/icons"

export default function Cards() {
  return (
    <Card>
      <CardContent>
        <h4 className="text-lg font-semibold mt-5">Task 1</h4>
        <p className="text-muted-foreground">Description of Task 1</p>
          <Button className="mt-5">
            Delete Task
          </Button>
      </CardContent>
    </Card>
  )
}