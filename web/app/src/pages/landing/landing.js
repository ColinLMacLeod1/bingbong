import logo from './img/logo.svg';

function Landing() {
  return (
    <div className="App">
      <header className="grid place-items-center h-screen">
        <img src={logo} className="w-80" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default Landing;
