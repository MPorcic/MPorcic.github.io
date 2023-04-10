import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import DeviceUUID from "device-uuid";

function App() {
  let deviceId = new DeviceUUID.DeviceUUID();
  useEffect(() => {}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{deviceId.get()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
