import NewColumn from "../../components/Column/Column";
import { InitialData } from "../../components/Kanban/initialData";
import { Card } from "./Home.style";

const Home = () => {
  // const MOCK_INITIAL_DATA = [
  //   {
  //     id: "column-1",
  //     title: "To do",
  //     author: "Alex",
  //     taskIds: ["task-1", "task-2", "task-3", "task-4"],
  //   },
  //   {
  //     id: "column-2",
  //     title: "In progress",
  //     author: "Ana",
  //     taskIds: [],
  //   },
  //   {
  //     id: "column-3",
  //     title: "Done",
  //     author: "Billy",
  //     taskIds: [],
  //   },
  // ];

  const initialData: InitialData = {
    tasks: {
      "task-1": {
        id: "task-1",
        content: "Take out the garbage",
        author: "Alex",
        priority: "high",
      },
      "task-2": {
        id: "task-2",
        content: "Watch my favorite show",
        author: "Alex",
        priority: "medium",
      },
      "task-3": {
        id: "task-3",
        content: "Charge my phone",
        author: "Alex",
        priority: "low",
      },
      "task-4": { id: "task-4", content: "Cook dinner", author: "Alex" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        author: "Alex",
        taskIds: ["task-1", "task-2", "task-3", "task-4"],
      },
      "column-2": {
        id: "column-2",
        title: "In progress",
        author: "Billy",
        taskIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        author: "Ana",
        taskIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
    holdTasks: [
      { id: "task-1", content: "Take out the garbage", author: "Alex" },
      { id: "task-2", content: "Watch my favorite show", author: "Alex" },
      { id: "task-3", content: "Charge my phone", author: "Alex" },
    ],
  };

  return (
    <Card>
      {initialData.columnOrder.map((columnId) => {
        const column = initialData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);

        return <NewColumn key={column.id} column={column} tasks={tasks} />;
      })}
    </Card>
  );
};

export default Home;
