import React from "react";

function Form(props) {
  return (
    <>
      <form onSubmit={props.handleFormSubmit}>
        <div className="form-group">
          <label>Input Your Expense:</label>
          <input type="text" className="form-control" onChange={props.handleInputChange} placeholder="$"></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit change
        </button>
      </form>
    </>
  );
}

export default Form;
