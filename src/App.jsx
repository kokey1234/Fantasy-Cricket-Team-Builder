import { Outlet } from "react-router";
import "./App.css";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className="mx-7 my-3">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
