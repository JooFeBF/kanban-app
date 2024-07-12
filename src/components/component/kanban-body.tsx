"use client"

import { Button } from "@/components/ui/button"
import { ModalSection } from "@/components/ui/modal-section"
import { useState, useEffect } from "react";

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