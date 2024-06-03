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
import { InitialData } from "../../models/IInitialData";

type ColumnFormProps = {
  setHandleModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ColumnForm = ({ setHandleModal }: ColumnFormProps) => {
  const { setDataBoard } = useContext(UserContext);

  const [column, setColumn] = useState<Column>({
    id: "",
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
      if (!prevDataBoard || prevDataBoard.columnOrder.length === 3) {
        window.alert("Não é possível adicionar mais colunas");

        return prevDataBoard;
      }

      return setNewColumn(prevDataBoard);
    });

    setHandleModal(false);
  };

  const setNewColumn = (prevDataBoard: InitialData) => {
    const newColumn = {
      ...column,
      id: findMaxColumnId(prevDataBoard.columnOrder),
    };

    const newBoard = { ...prevDataBoard };

    newBoard.columnOrder.push(newColumn.id);

    newBoard.columns = { ...newBoard.columns, [newColumn.id]: newColumn };

    return newBoard;
  };

  const findMaxColumnId = (columnOrder: string[]): string => {
    const allColumns = [...columnOrder];

    let maxId = 0;

    allColumns.forEach((column) => {
      const idNumber = parseInt(column.replace("column-", ""));
      if (idNumber > maxId) {
        maxId = idNumber;
      }
    });

    return `column-${maxId + 1}`;
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>Adicionar Coluna</StyledTitle>
      <StyledLabel htmlFor="title">Title</StyledLabel>
      <StyledInput
        type="text"
        id="title"
        name="title"
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
