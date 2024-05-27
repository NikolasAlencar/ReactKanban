import { Task } from "../../models/ITask";
import { Container, StyledP, StyledPriority, StyledSvg } from "./Task.style";

const NewTask = ({ task }: { task: Task }) => {
  return (
    <Container>
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
  );
};

export default NewTask;
