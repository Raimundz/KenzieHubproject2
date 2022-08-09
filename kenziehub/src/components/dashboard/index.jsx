import { DashboardKenziehub } from "./styles";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <DashboardKenziehub>
      <div className="KenziehubHeader">
        <h1 className="logoKenzie">Kenzie Hub</h1>
        <button
          className="exitButton"
          onClick={() => {
            window.localStorage.clear();
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>
      <div className="topContentDashboard">
        <h1>Olá, {window.localStorage.getItem("userName")}</h1>
        <p>Primeiro módulo (Introdução ao Frontend)</p>
      </div>
      <h2 className="textContent">Que pena! Estamos em desenvolvimento </h2>
      <p className="paragraphContent">
        Nossa aplicação está em desenvolvimento, em breve teremos novidade
      </p>
    </DashboardKenziehub>
  );
}

export default Dashboard;
