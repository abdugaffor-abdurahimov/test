import "./App.css";
import CreateTask from "./pages/CreateTask";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <div className="App">
      <Register />
      <Login />

      <CreateTask />
      <TaskList />
      <Details />
    </div>
  );
}

export default App;
