import { StyledHeader, StyledSvg } from "./Header.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledSvg onClick={() => navigate("")} />
      Kanban | Welcome screen
    </StyledHeader>
  );
};

export default Header;
