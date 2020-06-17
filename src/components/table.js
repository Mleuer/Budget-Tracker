import React from "react";

function Table(props) {

  const formatExpense = (expense) => {
    return "$" + expense + ".00";
  }

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses.map((expense) => (
            <tr>
              <td>{formatExpense(expense)}</td>
            </tr>
          ))}
          <tr>
          <th>Total: {formatExpense(props.total)}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
