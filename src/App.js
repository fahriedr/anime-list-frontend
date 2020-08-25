<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Anime from "./components/views/Anime";
import "./assets/bootstrap-5.0/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Anime />
>>>>>>> bd78dc6e12ac0a97d13da9fe7cc5009c959a6059
    </div>
  );
}

export default App;
