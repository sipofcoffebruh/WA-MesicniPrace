import "./App.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hlavni from "./pages/hlavniPage.js";
import Prodej from "./pages/prodejPage.js";
import Team from "./pages/team.js";
import Login from "./pages/LoginPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hlavni />} />
        <Route path="/prodej" element={<Prodej />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
