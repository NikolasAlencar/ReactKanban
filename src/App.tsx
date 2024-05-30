import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import { UserContext, UserDataBoard } from "./contexts/UserContext";
import { useContext } from "react";
import { themeDark, themeLight } from "./styles/theme";

const App = () => {
  const { toggleTheme } = useContext(UserContext);

  return (
    <ThemeProvider theme={toggleTheme === "dark" ? themeDark : themeLight}>
      <GlobalStyles />
      <BrowserRouter>
        <UserDataBoard>
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </UserDataBoard>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
