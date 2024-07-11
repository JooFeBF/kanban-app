import { Button } from "@/components/ui/button"
import { ModalSection } from "@/components/ui/modal-section"
import KanbanSection from "./kanban-section"






export function KanbanBody() {
  return (
    <main className="flex-1 p-6 h-full">
      <div className="flex justify-end items-center mb-6">
        <Button>Add Section</Button>
       <KanbanSection></KanbanSection>
      </div>
    </main>
  )
}

export default KanbanBody