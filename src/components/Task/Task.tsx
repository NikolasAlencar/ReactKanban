import { Draggable } from "react-beautiful-dnd";
import { Task } from "../../models/ITask";
import { Container, StyledP, StyledPriority, StyledSvg } from "./Task.style";

interface NewTaskProps {
  task: Task;
  index: number;
}

const NewTask = ({ task, index }: NewTaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StyledP>{task.content}</StyledP>
          <StyledP>
            {task.id}
            {task.priority && (
              <StyledPriority priority={task.priority}>
                {task.priority}
              </StyledPriority>
            )}
          </StyledP>
          <StyledP className="flex-align-center">
            <StyledSvg />
            {task.author}
          </StyledP>
        </Container>
      )}
    </Draggable>
  );
};

export default NewTask;
