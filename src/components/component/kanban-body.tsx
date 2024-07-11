import { Button } from "@/components/ui/button"
import { ModalSection } from "@/components/ui/modal-section"






export function KanbanBody() {
  return (
    <main className="flex-1 p-6 h-full">
      <div className="flex justify-end items-center mb-6">
        <Button>Add Section</Button>
      </div>
    </main>
  )
}

export default KanbanBody