import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/home")}>Welcome</button>;
};

export default Welcome;
