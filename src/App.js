import "./App.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hlavni from "./pages/hlavni.js";
import Prodej from "./pages/Prodej.js";
import Team from "./pages/team.js";
import Login from "./pages/uvod.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hlavni" element={<Hlavni />} />
        <Route path="/prodej" element={<Prodej />} />
        <Route path="/team" element={<Team />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
