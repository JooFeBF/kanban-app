import { Button } from "@/components/ui/button"
import { ModalTask } from "@/components/ui/modal-task"






export function KanbanBody() {
  return (
    <main className="flex-1 p-6 h-full">
      <div className="flex justify-end items-center mb-6">
        <Button>Add Section</Button>
        <ModalTask></ModalTask>
      </div>
    </main>
  )
}

export default KanbanBody