import "./App.css";
import reactLogo from "/React-icon.png";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <aside>
        <h1>React Hooks</h1>
        <nav>
          <NavLink to="actual-form">Form</NavLink>
          <NavLink to="actual-fetching">Fetching Data</NavLink>
          <NavLink to="redundant-state">redundant state</NavLink>
          <NavLink to="unnecessary-effect">unnecessary effect</NavLink>
          <NavLink to="unnecessary-effect-two">unnecessary effect II</NavLink>
        </nav>
        <div>
          <img src={reactLogo} className="logo" alt="React logo" />
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
