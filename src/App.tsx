import { UserDataBoard } from "./contexts/UserContext";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <UserDataBoard>
      <AppRoutes />
    </UserDataBoard>
  );
};

export default App;
