import { useContext } from "react";
import { ToggleBall, ToggleContainer } from "./ThemeSwitcher.style";
import { UserContext } from "../../contexts/UserContext";

const ThemeSwitcher = () => {
  const { toggleTheme, setToggleTheme } = useContext(UserContext);

  return (
    <ToggleContainer
      onClick={() => setToggleTheme(toggleTheme === "dark" ? "light" : "dark")}
    >
      <ToggleBall isDark={toggleTheme === "dark"} />
    </ToggleContainer>
  );
};

export default ThemeSwitcher;
