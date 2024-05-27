import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import NewColumn from "../../components/Column/Column";
import NewTask from "../../components/Task/Task";
import { InitialData } from "../../models/IInitialData";
import { Card } from "./Home.style";
import { StyledTitle } from "../../components/Column/Column.style";

const Home = () => {
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
      { id: "task-4", content: "Take out the garbage", priority: "low" },
      { id: "task-5", content: "Watch my favorite show", priority: "high" },
      { id: "task-6", content: "Charge my phone" },
    ],
  };

  function onDragEnd(result: DropResult) {
    //const { destination, source, draggableId } = result
    console.log(result);
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Card>
          {initialData.columnOrder.map((columnId) => {
            const column = initialData.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => initialData.tasks[taskId]
            );

            return <NewColumn key={column.id} column={column} tasks={tasks} />;
          })}
        </Card>

        <Card style={{ display: "block" }}>
          <Droppable droppableId="holdTasks">
            {(provided, snapshot) => (
              <>
                <StyledTitle style={{ marginBottom: "1rem" }}>
                  Hold Tasks
                </StyledTitle>
                <div
                  style={{ display: "flex" }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {initialData.holdTasks &&
                    initialData.holdTasks.map((task, index) => (
                      <NewTask key={task.id} task={task} index={index} />
                    ))}
                  {provided.placeholder}
                </div>
              </>
            )}
          </Droppable>
        </Card>
      </DragDropContext>
    </>
  );
};

export default Home;
