import React from 'react';
import './App.css';
import Form from "./components/form";
import Jumbotron from "./components/jumbotron";
import Table from "./components/table";

class App extends React.Component {

  state = {
    expenses: [],
    amount: 0
  }

  handleInputChange = event => {
    this.setState({...this.state, amount: event.target.value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event);

    let expenseArr = this.state.expenses;
    expenseArr.push(this.state.amount);

    this.setState({...this.state, expenses: expenseArr})
  };

  render() {
    return (
      <div className="container">
        <Jumbotron/>
        <Form handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        <Table expenses={this.state.expenses}/>
      </div>
    );
  }
}

export default App;
