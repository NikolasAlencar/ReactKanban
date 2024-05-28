import { useNavigate } from "react-router-dom";
import { Button, Card, Icon, Label } from "./GenericError.style";

const GenericError = ({ error }: { error: string }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Icon>😞</Icon>
      <Label>
        Desculpe, tivemos o seguinte erro ao consultar dados: {error}
      </Label>
      <Button type="button" onClick={() => navigate("/")}>
        Retornar ao início
      </Button>
    </Card>
  );
};

export default GenericError;
