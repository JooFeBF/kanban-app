"use client"

import { Button } from "@/components/ui/button"
import { ModalSection } from "@/components/ui/modal-section"
import { useState , useEffect, useMemo } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

const EXAMPLE_ITEMS = [
  {
    "column": {
      "id": 12,
      "user_id": 2,
      "title": "in process",
      "position": 1
    },
    "tasks": [
      {
        "id": 15,
        "column_id": 12,
        "user_id": 1,
        "title": "segunda tarea",
        "description": "Descripción de la nueva tarea",
        "position": 3,
        "position_column": 1
      }
    ]
  },
  {
    "column": {
      "id": 13,
      "user_id": 2,
      "title": "done",
      "position": 1
    },
    "tasks": []
  },
  {
    "column": {
      "id": 11,
      "user_id": 2,
      "title": "to do",
      "position": 1
    },
    "tasks": [
      {
        "id": 14,
        "column_id": 11,
        "user_id": 1,
        "title": "Tercera Tarea",
        "description": "Descripción de la nueva tarea",
        "position": 1,
        "position_column": 1
      },
      {
        "id": 13,
        "column_id": 11,
        "user_id": 1,
        "title": "segunda tarea",
        "description": "Descripción de la nueva tarea",
        "position": 1,
        "position_column": 2
      }
    ]
  }
]

interface Column {
  id: number;
  user_id: number;
  title: string;
  position: number;
}

interface Task {
  id: number;
  column_id: number;
  user_id: number;
  title: string;
  description: string;
  position: number;
  position_column: number;
}

export function KanbanBody() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <KanbanBoard />      
    </>
  );
}

export default KanbanBody