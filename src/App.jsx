import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FlashCard from "./components/flashCard/flashCard.jsx"
import Form from "./components/form/Form.jsx"


function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={reactLogo} className="reactLogo"></img>
        <h1>React Flashcards</h1>
        <p>🧠 Expand your React knowledge, One flashcard at a time 🙋🏻‍♂️</p>
      </header>
      <Form />
      <FlashCard/>
      <footer className="footer">
        <p>Built with react <img src={reactLogo} className="reactLogoFooter"></img></p>
      </footer>
    </div>
  );
}

export default App;
