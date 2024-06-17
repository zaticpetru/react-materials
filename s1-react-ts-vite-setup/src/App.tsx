import "./App.css";
import devLogo from "/setting.png";
import prodLogo from "/cost.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BASE_URL } from "./utils";

function App() {
  return (
    <>
      <aside>
        <h1>Vite + React</h1>
        <nav>
          <NavLink to={BASE_URL} end>
            .env variables
          </NavLink>
          <NavLink to="normal-page">normal page</NavLink>
          <NavLink to="page-with-error?custom=true">custom error</NavLink>
          <Link to="page-with-error">simple error</Link>
          <Link to="not-ex">non existing url</Link>
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
