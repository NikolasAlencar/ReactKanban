import { Task } from "../Kanban/initialData";
import { Container, StyledP, StyledPriority, StyledSvg } from "./Task.style";

const NewTask = ({ task }: { task: Task }) => {
  console.log(task);
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
