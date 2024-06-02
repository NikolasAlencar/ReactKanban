import { useContext, useState } from "react";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "./TaskForm.style";
import { UserContext } from "../../contexts/UserContext";
import { Column } from "../../models/IColumn";

export type Task = {
  id: string;
  content: string;
  author?: string;
  index?: number;
  priority: "medium" | "high" | "low";
};

type TaskFormProps = {
  id: string;
  setHandleModal: React.Dispatch<React.SetStateAction<boolean>>;
  column: Column;
};

const TaskForm = ({ id, setHandleModal, column }: TaskFormProps) => {
  const { setDataBoard } = useContext(UserContext);

  const [task, setTask] = useState<Task>({
    id,
    content: "",
    author: "",
    priority: "low"
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDataBoard((prevDataBoard) => {
      if (!prevDataBoard) return prevDataBoard;

      const newTask = { ...task };

      const newTasks = {
        ...prevDataBoard.tasks,
        [newTask.id]: newTask,
      };

      const newColumn = {
        ...column,
        taskIds: [...column.taskIds, newTask.id],
      };

      const newColumns = {
        ...prevDataBoard.columns,
        [column.id]: newColumn,
      };

      return {
        ...prevDataBoard,
        tasks: newTasks,
        columns: newColumns,
      };
    });

    setHandleModal(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="content">Content</StyledLabel>
      <StyledInput
        type="text"
        id="content"
        name="content"
        value={task.content}
        onChange={handleChange}
        required
      />

      <StyledLabel htmlFor="author">Author</StyledLabel>
      <StyledInput
        type="text"
        id="author"
        name="author"
        value={task.author}
        onChange={handleChange}
      />

      <StyledLabel htmlFor="priority">Priority</StyledLabel>
      <StyledSelect
        id="priority"
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </StyledSelect>

      <StyledButton type="submit">Criar tarefa</StyledButton>
    </StyledForm>
  );
};

export default TaskForm;
