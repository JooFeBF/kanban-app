import PlusIcon from "../icons/PlusIcon";
import { useEffect, useMemo, useState } from "react";
import ColumnContainer from "./ColumnContainer";
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
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";
import axios from 'axios';

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

interface ColumnResponse {
  column: Column;
  tasks: Task[];
}

function KanbanBoard() {
  const [columns, setColumns] = useState<ColumnResponse[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(
          "https://kanban-con-typescript.onrender.com/api/sections",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setColumns(response.data);
        setTasks(response.data.flatMap((item: ColumnResponse) => item.tasks));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchSections();
  }, []);
  
  const columnsId = useMemo(() => columns.map((col) => col.column.id), [columns]);
  console.log(columnsId);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <div
      className="
        m-auto
        flex
        min-h-full
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
      "
    >
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.column.id}
                  column={col.column}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={col.tasks}
                />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={createNewColumn}
            className="
              h-[60px]
              w-[350px]
              min-w-[350px]
              cursor-pointer
              rounded-lg
              bg-mainBackgroundColor
              border-2
              border-columnBackgroundColor
              p-4
              ring-rose-500
              hover:ring-2
              flex
              gap-2
            "
          >
            <PlusIcon />
            Add Column
          </button>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter((task) => task.column_id === activeColumn.id)}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );

  function createTask(column_id: number) {
    const newTask: Task = {
      id: generateId(),
      user_id: 1,
      position: tasks.length + 1,
      position_column: 1,
      title: `Task ${tasks.length + 1}`,
      column_id,
      description: `Task ${tasks.length + 1}`,
    };

    // Actualizar el estado de tasks
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Actualizar el estado de columns
    setColumns((prevColumns) => {
      return prevColumns.map((col) => {
        if (col.column.id === column_id) {
          return {
            ...col,
            tasks: [...col.tasks, newTask],
          };
        }
        return col;
      });
    });
  }

  function deleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function updateTask(id: number, description: string) {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, description };
    });

    setTasks(newTasks);
  }

  function createNewColumn(title: string) {
    const newColumn: Column = {
      id: generateId(),
      user_id: 1,
      position: columns.length + 1,
      title: `${title}`,
    };

    const newColumnResponse: ColumnResponse = {
      column: newColumn,
      tasks: [],
    };

    setColumns((prevColumns) => [...prevColumns, newColumnResponse]);
  }

  function deleteColumn(id: number) {
    const filteredColumns = columns.filter((col) => col.column.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((t) => t.column_id !== id);
    setTasks(newTasks);
  }

  function updateColumn(id: number, title: string) {
    const newColumns = columns.map((col) => {
      if (col.column.id !== id) return col;
      return { ...col, column: { ...col.column, title } };
    });

    setColumns(newColumns);
  }

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;

    console.log("DRAG END");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.column.id === activeId);
      const overColumnIndex = columns.findIndex((col) => col.column.id === overId);
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    // Estoy soltando una tarea sobre otra tarea
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].column_id !== tasks[overIndex].column_id) {
          // Solución introducida después de la grabación del video
          tasks[activeIndex].column_id = tasks[overIndex].column_id;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    // Estoy soltando una tarea sobre una columna
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].column_id = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
}

function generateId() {
  /* Genera un número aleatorio entre 0 y 10000 */
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
