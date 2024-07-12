import e from "express";

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

export type { Column, Task };