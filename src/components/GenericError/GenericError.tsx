import { useNavigate } from "react-router-dom";
import { Button, Card, Icon, Label } from "./GenericError.style";

const GenericError = () => {
  const navigate = useNavigate();

  function returnWelcomeScreen() {
    navigate("/");
  }

  return (
    <Card>
      <Icon>😞</Icon>
      <Label>Desculpe, houve algum erro ao consultar dados!</Label>
      <Button type="button" onClick={returnWelcomeScreen}>
        Retornar ao início
      </Button>
    </Card>
  );
};

export default GenericError;
