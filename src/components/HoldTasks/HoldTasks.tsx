import { Droppable } from "react-beautiful-dnd";
import { StyledTitle } from "../Column/Column.style";
import NewTask from "../Task/Task";
import { Task } from "../../models/ITask";
import { Card } from "../../pages/Home/Home.style";

interface HoldTasksProps {
  holdTasks: Task[];
}

const HoldTasks = ({ holdTasks }: HoldTasksProps) => {
  return (
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
              {holdTasks.map((task, index) => (
                <NewTask key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </>
        )}
      </Droppable>
    </Card>
  );
};

export default HoldTasks;
