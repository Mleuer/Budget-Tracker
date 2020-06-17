import React from "react";

function Table(props) {

  const formatExpense = (expense) => {
    return "$" + expense + ".00";
  }
  const tableStyle = {
    width: "25%",
    border: "1",
    marginTop: "15px"
  }

  return (
    <>
      <table border={tableStyle.border} style={tableStyle}>
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
