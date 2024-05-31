import { useContext } from "react";
import {
  StyledEmote,
  ToggleBall,
  ToggleContainer,
} from "./ThemeSwitcher.style";
import { UserContext } from "../../contexts/UserContext";

const ThemeSwitcher = () => {
  const { toggleTheme, setToggleTheme } = useContext(UserContext);

  const handleToggle = () =>
    setToggleTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  return (
    <ToggleContainer onClick={handleToggle}>
      <StyledEmote role="img" aria-label="emoji de sol">
        ☀︎
      </StyledEmote>
      <ToggleBall isDark={toggleTheme === "dark"} />
      <StyledEmote role="img" aria-label="emoji de lua">
        ☽
      </StyledEmote>
    </ToggleContainer>
  );
};

export default ThemeSwitcher;
