import { useContext, useState } from "react";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../TaskForm/TaskForm.style";
import { UserContext } from "../../contexts/UserContext";
import { Column } from "../../models/IColumn";
import { StyledTitle } from "../Column/Column.style";

type ColumnFormProps = {
  id: string;
  setHandleModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ColumnForm = ({ id, setHandleModal }: ColumnFormProps) => {
  const { setDataBoard } = useContext(UserContext);

  const [column, setColumn] = useState<Column>({
    id,
    title: "",
    taskIds: [],
    author: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setColumn({ ...column, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDataBoard((prevDataBoard) => {
      if (!prevDataBoard) return prevDataBoard;

      return prevDataBoard;
    });

    setHandleModal(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>Adicionar Coluna</StyledTitle>
      <StyledLabel htmlFor="content">Title</StyledLabel>
      <StyledInput
        type="text"
        id="content"
        name="content"
        value={column.title}
        onChange={handleChange}
        required
      />

      <StyledLabel htmlFor="author">Author</StyledLabel>
      <StyledInput
        type="text"
        id="author"
        name="author"
        value={column.author}
        onChange={handleChange}
      />

      <StyledButton type="submit">Criar coluna</StyledButton>
    </StyledForm>
  );
};

export default ColumnForm;
