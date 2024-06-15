import { useState } from "react";
import "./App.css";
import devLogo from "/setting.png";
import prodLogo from "/cost.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <img src={import.meta.env.VITE_APP_LOGO as string} className="logo" alt="Vite logo" /> */}
        <img
          src={import.meta.env.PROD ? prodLogo : devLogo}
          className="logo"
          alt="Vite logo"
        />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h4>.env variables</h4>
        <p>VITE_SOME_KEY={import.meta.env.VITE_SOME_KEY}</p>
        <p>App running in MODE={import.meta.env.MODE}</p>
      </div>
    </>
  );
}

export default App;
