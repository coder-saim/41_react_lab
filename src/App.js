import HomePage from "./components/HomePage";
import Register from "./components/Register";
import TaskManager from "./components/TaskManager";
import TextBox from "./components/TextBox";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/" element={<Register />} />
      <Route path="/textbox" element={<TextBox />} />
      <Route path="/taskmanager" element={<TaskManager />} />
    </Routes>
  );
}

export default App;
