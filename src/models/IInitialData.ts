import { Column } from "./IColumn";
import { Task } from "./ITask";

export type InitialData = {
    tasks: Record<string, Task>;
    columns: Record<string, Column>;
    columnOrder: string[];
    holdTasks: Task[];
  };