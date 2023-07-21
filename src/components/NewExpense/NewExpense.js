import React, {useState} from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"






const NewExpense = (props)=> {
    const saveExpenseDataHandler = (eneredExpenseData) => {
        const expenseData = {
            ...eneredExpenseData,
            id: Math.random().toString()
        };
      props.onAddExpense(expenseData)
      setIsEditing(false)
    }

    const [isEditing, setIsEditing] = useState(false)


    const startEditingHandler = () => {
      setIsEditing(true)
    }

    const stopEditingHandler = ()=> {
      setIsEditing(false)
    }


return (<div className="new-expense">
 {!isEditing && <button onClick={startEditingHandler}>AddNew Expense</button>}
{ isEditing &&  <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
</div>)
}



export default NewExpense
