import { PlusIcon, XIcon } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import Card from '@/components/ui/cards'

export default function Column() {
  return(
    <div className="bg-muted rounded-lg p-4 relative">
      <h3 className="text-lg font-semibold mb-4">To Do</h3>
      <div className="space-y-4">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="absolute top-4 right-4 flex gap-2">
        <Button variant="ghost" size="icon">
          <PlusIcon className="h-5 w-5" />
          <span className="sr-only">Add Task</span>
        </Button>
        <Button variant="ghost" size="icon">
          <XIcon className="h-5 w-5" />
          <span className="sr-only">Delete Column</span>
        </Button>
      </div>
    </div>
  )
}