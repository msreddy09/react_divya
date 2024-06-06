import React, { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

const ExpenseProvider = (props) => {

    const initData = {
        expense: JSON.parse(localStorage.getItem('expense')) || [],
        income: JSON.parse(localStorage.getItem('income')) || [],
    }

    const [budgetData, setBudgetData] = useState(initData);
    const [icats, setIcats] = useState(JSON.parse(localStorage.getItem('icats')) || ['Food', 'Travel', 'Rent'])

    return (
        <ExpenseContext.Provider value={{
            expense: budgetData.expense,
            income: budgetData.income,
            setBudgetData: (data) => {
                setBudgetData(data);
                localStorage.setItem('income', JSON.stringify(data.income))
                localStorage.setItem('expense', JSON.stringify(data.expense))
            },
            icats,
            setIcats: (data) =>  { 
                setIcats(data)
                localStorage.setItem('icats', JSON.stringify(data))
            }

        }}>
            {props.children}
        </ExpenseContext.Provider>
    )

}

export { ExpenseProvider, ExpenseContext }

