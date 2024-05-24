import { Droppable } from 'react-beautiful-dnd';
import { ColumnContainer, Title, TaskList } from './styledComponents';
import Task from './Task';
import { Column as ColumnType, Task as TaskType } from './initialData';

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
}

const Column = ({ column, tasks }: ColumnProps) => (
  <ColumnContainer>
    <Title>{column.title}</Title>
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <TaskList
          ref={provided.innerRef}
          {...provided.droppableProps}
          $isDraggingOver={snapshot.isDraggingOver}
        >
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  </ColumnContainer>
);

export default Column;
