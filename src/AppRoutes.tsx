import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { themeDark, themeLight } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

const AppRoutes = () => {
  const { toggleTheme } = useContext(UserContext);

  return (
    <ThemeProvider theme={toggleTheme === "dark" ? themeDark : themeLight}>
      <GlobalStyles />
      <ThemeSwitcher />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
