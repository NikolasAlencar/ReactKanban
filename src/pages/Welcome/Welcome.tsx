import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { StyledH1, StyledH2, StyledImg, StyledWelcome } from "./Welcome.style";
import Kanban from "../../assets/kanban.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <StyledWelcome>
        <StyledH1>
          Bem vindo ao React Kanban <br />
          <StyledH2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            doloremque. Modi distinctio enim, ab ipsam placeat sunt eaque
            voluptates deleniti ex optio doloremque adipisci pariatur dolore
            atque tenetur assumenda nam.
          </StyledH2>
        </StyledH1>
        <StyledImg
          className="responsive-img"
          src={Kanban}
          alt="Imagem animada de um Kanban"
        />
        <Button className="m-top-16" onClick={() => navigate("/home")}>
          Acessar o Board
        </Button>
      </StyledWelcome>
    </Card>
  );
};

export default Welcome;
