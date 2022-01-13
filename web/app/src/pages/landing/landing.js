import logo from './img/logo.svg';
import { useEffect } from 'react';
import call from "../../util/call"

function Landing() {
  useEffect(() => {
    call("/api/test", "get");
  }, [])

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
