import React from 'react';
import './App.css';
import Form from "./components/form";
import Jumbotron from "./components/jumbotron";
import Table from "./components/table";

function App() {
  return (
    <div className="container">
      <Jumbotron/>
      <Form/>
      <Table/>
    </div>
  );
}

export default App;
