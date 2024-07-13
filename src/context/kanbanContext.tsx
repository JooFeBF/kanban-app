import { Context, useContext, createContext, useState } from "react";

const KanbanContext: Context<any> = createContext({});

export const KanbanProvider = ({ children }: { children: React.ReactNode }) => {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);

  return (
    <KanbanContext.Provider value={{ columns, tasks, setColumns, setTasks }}>
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanban = () => useContext(KanbanContext);