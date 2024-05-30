import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { Card } from "../../pages/Home/Home.style";
import NewColumn from "../Column/Column";
import { StyledTitle } from "../Column/Column.style";
import NewTask from "../Task/Task";
import { InitialData } from "../../models/IInitialData";

const Board = ({ initialData }: { initialData: InitialData }) => {
  function onDragEnd(result: DropResult) {
    // const { destination, source, draggableId } = result
    console.log(result);
  }

  return (
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
  );
};

export default Board;
