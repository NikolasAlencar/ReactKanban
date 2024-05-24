import { Column } from "../../models/IColumn";
import { Task } from "../Kanban/initialData";
import NewTask from "../Task/Task";
import { StyledTitle, StyledColumn, StyledContainer, StyledSpan } from "./Column.style";

const NewColumn = ({ column, tasks }: { column: Column; tasks: Task[] }) => {
  return (
    <StyledColumn>
      <StyledTitle>{column.author}</StyledTitle>
      <StyledContainer>
        <StyledTitle>{column.title} | {tasks.length}</StyledTitle>
        {tasks.map((task, index) => (
          <NewTask key={index} task={task} />
        ))}
      </StyledContainer>
      <StyledSpan>+</StyledSpan>
    </StyledColumn>
  );
};

export default NewColumn;
