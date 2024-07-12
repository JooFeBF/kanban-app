"use client"

import { Button } from "@/components/ui/button"
import { ModalSection } from "@/components/ui/modal-section"
import { useState , useEffect } from "react";
import Column from "@/components/ui/column";
import { PlusIcon, XIcon } from "@/components/ui/icons";
import Card from "@/components/ui/cards";

export function KanbanBody() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <main className="flex-1 p-6 h-full">
        <div className="flex justify-end items-center mb-6">
          <Button onClick={toggleModal}>Add Section</Button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted rounded-lg p-4 relative">
              {/* Esta columna es por defecto siempre aparece */}
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
            <Column />
            <Column />
          </div>
        </div>
      </main>
      {modal && (
        <div className="fixed inset-0 bg-opacity-30 bg-background-opacity flex justify-center items-center">
          <ModalSection />
        </div>
      )}
    </>
  );
}

export default KanbanBody