import React from "react";

function Table(props) {
  return (
    <>
      <table border="1">
        <tbody>
          <tr>
            <th>Expenses</th>
          </tr>
          {props.expenses.forEach((expense) => (
            <tr>
              <td>{expense}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
