import React from "react";

function Form() {
  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Input Your Expense</label>
          <input type="text" className="form-control"></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
