import Card from "../UI/Card";
import "./expenses.css";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((exp) => {
    return exp.date.getFullYear().toString() === filterYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChange} />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
