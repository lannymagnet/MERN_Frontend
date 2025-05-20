import { useNavigate } from "react-router-dom";

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Logo from "../../assets/logo.png";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-card">
      <div className="home-header">
        <img src={Logo} alt="App Logo" className="home-logo" />
        <h1 className="home-title">Assessment App</h1>
      </div>
      <div className="button-group">
        <PrimaryButton onClick={() => navigate("/admin")}>
          Admin Dashboard
        </PrimaryButton>
        <PrimaryButton onClick={() => navigate("/rules")}>
          Start Test
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Home;
