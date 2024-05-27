import { StyledHeader, StyledSvg } from "./Header.style";
import { useLocation, useNavigate } from "react-router-dom";

interface FactoryUrl {
  [keyof: string]: string;
}

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function getPathname() {
    const pathUrl = location.pathname.slice(1);

    const factoryUrl: FactoryUrl = {
      home: "Home",
      "": "Welcome screen",
    };

    return factoryUrl[pathUrl];
  }

  return (
    <StyledHeader>
      <StyledSvg onClick={() => navigate("")} />
      Kanban | {getPathname()}
    </StyledHeader>
  );
};

export default Header;
