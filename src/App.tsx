import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import { UserDataBoard } from "./contexts/UserContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
