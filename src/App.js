import React from 'react';
import './App.css';
import Form from "./components/form";
import Jumbotron from "./components/jumbotron";
import Table from "./components/table";

class App extends React.Component {

  state = {
    expenses: [],
    amount: "",
    total: 0
  }

  handleInputChange = event => {
    this.setState({...this.state, amount: event.target.value});
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let expenseArr = this.state.expenses;
    let floatAmount = parseFloat(this.state.amount);

    expenseArr.push(floatAmount);
    console.log(floatAmount, this.state.total);

    this.setState({...this.state, expenses: expenseArr, total: this.state.total + floatAmount})
  };

  render() {
    return (
      <div className="container">
        <Jumbotron/>
        <Form handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        <Table expenses={this.state.expenses} total={this.state.total}/>
      </div>
    );
  }
}

export default App;
