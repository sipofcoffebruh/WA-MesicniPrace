import "./App.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hlavni from "./pages/hlavni.js";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hlavni />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
