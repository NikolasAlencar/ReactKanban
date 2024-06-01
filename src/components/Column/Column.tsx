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
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface NewColumnProps {
  column: Column;
  tasks: Task[];
}

const NewColumn = ({ column, tasks }: NewColumnProps) => {
  const { setDataBoard } = useContext(UserContext);

  const deleteColumn = (columnId: string) => {
    setDataBoard((prevDataBoard) => {
      if (!prevDataBoard || prevDataBoard.columnOrder.length === 1) {
        window.alert("Não é permitido deletar todas as colunas");

        return prevDataBoard;
      }

      const { [columnId]: _, ...newColumns } = prevDataBoard.columns;

      const newColumnOrder = prevDataBoard.columnOrder.filter(
        (id) => id !== columnId
      );

      return {
        ...prevDataBoard,
        columns: newColumns,
        columnOrder: newColumnOrder,
      };
    });
  };

  return (
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
            <StyledSpan>+</StyledSpan>
          </>
        )}
      </Droppable>
    </StyledColumn>
  );
};

export default NewColumn;
