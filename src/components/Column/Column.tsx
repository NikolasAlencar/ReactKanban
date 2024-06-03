import { Droppable } from "react-beautiful-dnd";
import { Column } from "../../models/IColumn";
import { Task } from "../../models/ITask";
import NewTask from "../Task/Task";
import {
  StyledTitle,
  StyledColumn,
  StyledContainer,
  StyledSpan,
} from "./Column.style";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { InitialData } from "../../models/IInitialData";

interface NewColumnProps {
  column: Column;
  tasks: Task[];
}

const NewColumn = ({ column, tasks }: NewColumnProps) => {
  const { dataBoard, setDataBoard } = useContext(UserContext);
  const [handleModal, setHandleModal] = useState(false);

  const deleteColumn = (columnId: string) => {
    setDataBoard((prevDataBoard) => {
      if (!prevDataBoard || prevDataBoard.columnOrder.length === 1) {
        window.alert("Não é permitido deletar todas as colunas");

        return prevDataBoard;
      }

      return setNewColumns(columnId, prevDataBoard);
    });
  };

  const setNewColumns = (columnId: string, prevDataBoard: InitialData) => {
    const { [columnId]: _, ...newColumns } = prevDataBoard.columns;

    const newColumnOrder = prevDataBoard.columnOrder.filter(
      (id) => id !== columnId
    );

    return {
      ...prevDataBoard,
      columns: newColumns,
      columnOrder: newColumnOrder,
    };
  };

  const findMaxTaskId = (tasks: Task[], holdTasks: Task[] = []): string => {
    const allTasks = [...tasks, ...holdTasks];

    let maxId = 0;

    allTasks.forEach((task) => {
      const idNumber = parseInt(task.id.replace("task-", ""));
      if (idNumber > maxId) {
        maxId = idNumber;
      }
    });

    return `task-${maxId + 1}`;
  };

  return (
    <>
      <StyledColumn>
        <StyledTitle>
          {column.author}
          <StyledSpan onClick={() => deleteColumn(column.id)}>x</StyledSpan>
        </StyledTitle>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <>
              <StyledContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <StyledTitle>
                  {column.title} | {tasks.length}
                </StyledTitle>
                {tasks.map((task, index) => (
                  <NewTask key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </StyledContainer>
              <StyledSpan onClick={() => setHandleModal(true)}>+</StyledSpan>
            </>
          )}
        </Droppable>
      </StyledColumn>

      {handleModal && (
        <Modal setHandleModal={setHandleModal}>
          <TaskForm
            id={findMaxTaskId(tasks, dataBoard?.holdTasks)}
            setHandleModal={setHandleModal}
            column={column}
          />
        </Modal>
      )}
    </>
  );
};

export default NewColumn;
