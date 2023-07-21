import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }; 


//One function for all three handlers

//   const inputChangeHandler = (indentifier, value) => {
//     if (indentifier === "title") {
//       setEnteredTitle(value);
//     } else if (indentifier === "date") {
//       setEnteredDate(value);
//     } else {
//       setEnteredValue(value);
//     }
  
const submitHandler = (event) =>{
    event.preventDefault()

    const expenseData = {
        title: enteredTitle,
        amount: enteredValue,
        date: new Date(enteredDate)
    }
props.onSaveExpenseData(expenseData)


    setEnteredTitle("")
    setEnteredValue("")
    setEnteredDate("")
}


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler} />
           
{/*            
            CAN USE FUNCTION INSIDE CHANGE EVENT AND DO IT WITH ONE FUNCTION ALL TREE
            onChange={(event) => */}
                {/* inputChangeHandler("title", event.target.value)} */}
         
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredValue}
            onChange={amountChangeHandler} />


            {/* // onChange={(event) =>
            //     inputChangeHandler("amount", event.target.value)
            //   } */}
         
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}/>
            {/* // onChange={(event) => inputChangeHandler("date", event.target.value)} */}
          
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
