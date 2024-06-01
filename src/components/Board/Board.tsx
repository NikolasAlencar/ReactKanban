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
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination || destination.droppableId === source.droppableId) return;

    setDataBoard((currentData) => {
      if (!currentData) return currentData;

      const newBoard = { ...currentData };

      if (
        source.droppableId === "holdTasks" ||
        destination.droppableId === "holdTasks"
      ) {
        handleHoldTaskMove(newBoard, destination, source, draggableId);
      } else {
        handleColumnTaskMove(newBoard, destination, source, draggableId);
      }

      return newBoard;
    });
  };

  const handleHoldTaskMove = (
    newBoard: InitialData,
    destination: DraggableLocation,
    source: DraggableLocation,
    draggableId: string
  ) => {
    const sourceIndex = newBoard.holdTasks.findIndex((task) => task.id === draggableId);

    if (sourceIndex > -1) {
      moveHoldTaskToColumn(newBoard, destination, sourceIndex);
    } else {
      moveTaskToHoldTask(newBoard, draggableId, source);
    }
  };

  const handleColumnTaskMove = (
    newBoard: InitialData,
    destination: DraggableLocation,
    source: DraggableLocation,
    draggableId: string
  ) => {
    const sourceTaskIds = getSourceTaskIds(newBoard, source, draggableId);
    const destinationTaskIds = getDestinationTaskIds(newBoard, destination, draggableId);

    newBoard.columns[source.droppableId].taskIds = sourceTaskIds;
    newBoard.columns[destination.droppableId].taskIds = destinationTaskIds;
  };

  const moveHoldTaskToColumn = (
    newBoard: InitialData,
    destination: DraggableLocation,
    sourceIndex: number
  ) => {
    const task = newBoard.holdTasks[sourceIndex];

    newBoard.tasks[task.id] = task;
    newBoard.columns[destination.droppableId].taskIds.push(task.id);
    newBoard.holdTasks.splice(sourceIndex, 1);
  };

  const moveTaskToHoldTask = (
    newBoard: InitialData,
    draggableId: string,
    source: DraggableLocation
  ) => {
    const task = newBoard.tasks[draggableId];

    newBoard.holdTasks.push(task);
    delete newBoard.tasks[draggableId];

    const sourceTaskIds = newBoard.columns[source.droppableId].taskIds;
    const sourceIndex = sourceTaskIds.indexOf(draggableId);
    sourceTaskIds.splice(sourceIndex, 1);
  };

  const getSourceTaskIds = (
    newBoard: InitialData,
    source: DraggableLocation,
    draggableId: string
  ) => {
    const sourceTaskIds = Array.from(newBoard.columns[source.droppableId].taskIds);
    const sourceIndex = sourceTaskIds.indexOf(draggableId);

    if (sourceIndex > -1) sourceTaskIds.splice(sourceIndex, 1);

    return sourceTaskIds;
  };

  const getDestinationTaskIds = (
    newBoard: InitialData,
    destination: DraggableLocation,
    draggableId: string
  ) => {
    const destinationTaskIds = Array.from(newBoard.columns[destination.droppableId].taskIds);
    destinationTaskIds.push(draggableId);
    return destinationTaskIds;
  };

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
                {initialData.holdTasks.map((task, index) => (
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
