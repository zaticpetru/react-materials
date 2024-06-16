function EnvVariables() {
  return (
    <div className="card">
      <p>VITE_SOME_KEY={import.meta.env.VITE_SOME_KEY}</p>
      <p>App running in MODE={import.meta.env.MODE}</p>
    </div>
  );
}

export default EnvVariables;
