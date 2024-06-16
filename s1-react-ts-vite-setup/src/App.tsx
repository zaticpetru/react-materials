import "./App.css";
import devLogo from "/setting.png";
import prodLogo from "/cost.png";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <aside>
        <h1>Vite + React</h1>
        <nav>
          <NavLink to="/">.env variables</NavLink>
          <NavLink to="/not-ex">non existing url</NavLink>
          <NavLink to="/page-with-error">simple error</NavLink>
          <NavLink to="/page-with-error?custom=true">custom error</NavLink>
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
