import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
