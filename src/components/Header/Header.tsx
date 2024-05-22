import { StyledHeader, StyledSvg } from "./Header.style";
import { ReactComponent as House } from "../../assets/house.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledSvg>
        <House onClick={() => navigate("")} />
      </StyledSvg>
      Kanban | Welcome screen
    </StyledHeader>
  );
};

export default Header;
