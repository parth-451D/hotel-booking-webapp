import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
