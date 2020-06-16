import React from "react";

function Form() {
  return (
    <>
      <form>
        <div className="form-group">
          <label>Input Your Expense:</label>
          <input type="text" className="form-control" placeholder="$"></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
