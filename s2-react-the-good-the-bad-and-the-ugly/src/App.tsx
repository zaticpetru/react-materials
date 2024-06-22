import "./App.css";
import devLogo from "/setting.png";
import prodLogo from "/cost.png";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <aside>
        <h1>React Hooks</h1>
        <nav>
          <NavLink to="good-example">good example</NavLink>
          <NavLink to="bad-example" end>
            bad example
          </NavLink>
          <NavLink to="ugly-example">ugly example</NavLink>
        </nav>
        <div>
          {/* <img src={import.meta.env.VITE_APP_LOGO as string} className="logo" alt="Vite logo" /> */}
          <img
            src={import.meta.env.PROD ? prodLogo : devLogo}
            className="logo"
            alt="Vite logo"
          />
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
