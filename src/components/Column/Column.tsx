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

const NewColumn = ({ column, tasks }: { column: Column; tasks: Task[] }) => {
  return (
    <StyledColumn>
      <StyledTitle>{column.author}</StyledTitle>
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
                <NewTask key={task.id} task={task} index={index}/>
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
