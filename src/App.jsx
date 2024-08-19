import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={reactLogo} className="reactLogo"></img>
        <h1>React Flashcards</h1>
        <p>🧠 Expand your React knowledge, One flashcard at a time 🙋🏻‍♂️</p>
      </header>
    </div>
  );
}

export default App;
