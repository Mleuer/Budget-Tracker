import React from 'react';
import './App.css';
import Form from "./components/form";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="container">
      <Jumbotron/>
      <Form/>
    </div>
  );
}

export default App;
