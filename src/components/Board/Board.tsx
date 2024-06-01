import {
  DragDropContext,
  DraggableLocation,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { Card } from "../../pages/Home/Home.style";
import NewColumn from "../Column/Column";
import { StyledTitle } from "../Column/Column.style";
import NewTask from "../Task/Task";
import { InitialData } from "../../models/IInitialData";

interface BoardProps {
  initialData: InitialData;
  setDataBoard: (value: React.SetStateAction<InitialData | null>) => void;
}

const Board = ({ initialData, setDataBoard }: BoardProps) => {
  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId) return;

    moveTaskToColumn(destination, source, draggableId);
  }

  function moveTaskToColumn(
    destination: DraggableLocation,
    source: DraggableLocation,
    draggableId: string
  ) {
    setDataBoard((initialData) => {
      if (!initialData) return initialData;

      const newBoard = { ...initialData };

      if (
        source.droppableId === "holdTasks" ||
        destination.droppableId === "holdTasks"
      ) {
        const sourceIndex = newBoard.holdTasks.findIndex(
          (task) => task.id === draggableId
        );

        if (sourceIndex > -1) {
          newBoard.tasks[newBoard.holdTasks[sourceIndex].id] =
            newBoard.holdTasks[sourceIndex];

          newBoard.columns[destination.droppableId].taskIds.push(
            newBoard.holdTasks[sourceIndex].id
          );

          newBoard.holdTasks.splice(sourceIndex, 1);
        } else{
          newBoard.holdTasks.push(newBoard.tasks[draggableId])
          delete newBoard.tasks[draggableId]
          const sourceIndex = newBoard.columns[source.droppableId].taskIds.indexOf(draggableId);
          newBoard.columns[source.droppableId].taskIds.splice(sourceIndex, 1);
        }

        return newBoard;
      } else {
        const sourceTaskIds = getSourceTaskIds(source, draggableId);
        const destinationTaskIds = getDestinationTaskIds(
          destination,
          draggableId
        );

        newBoard.columns[source.droppableId].taskIds = sourceTaskIds;
        newBoard.columns[destination.droppableId].taskIds = destinationTaskIds;
      }

      return newBoard;
    });
  }

  function getSourceTaskIds(source: DraggableLocation, draggableId: string) {
    const sourceTaskIds = Array.from(
      initialData?.columns[source.droppableId].taskIds
    );

    const sourceIndex = sourceTaskIds.indexOf(draggableId);

    if (sourceIndex > -1) {
      sourceTaskIds.splice(sourceIndex, 1);
    }

    return sourceTaskIds;
  }

  function getDestinationTaskIds(
    destination: DraggableLocation,
    draggableId: string
  ) {
    const destinationTaskIds = Array.from(
      initialData?.columns[destination.droppableId].taskIds
    );

    destinationTaskIds.push(draggableId);

    return destinationTaskIds;
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
          {(provided) => (
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
