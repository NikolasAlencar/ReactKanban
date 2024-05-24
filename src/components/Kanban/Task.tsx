import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskContainer } from './styledComponents';
import { Task as TaskType } from './initialData';

interface TaskProps {
  task: TaskType;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <TaskContainer
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        $isDragging={snapshot.isDragging}
      >
        {task.content}
      </TaskContainer>
    )}
  </Draggable>
);

export default Task;
