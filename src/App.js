import HomePage from "./components/HomePage";
import TaskManager from "./components/TaskManager";
import TextBox from "./components/TextBox";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/textbox" element={<TextBox />} />
      <Route path="/taskmanager" element={<TaskManager />} />
    </Routes>
  );
}

export default App;
