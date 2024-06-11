import React, { createContext, useContext, useReducer, useState } from "react";
import budgetReducer from "../reducers/BudgetReducer";

const ExpenseContext = createContext();

const ExpenseProvider = (props) => {

    let storedData = JSON.parse(localStorage.getItem('appState')) || {};
    const initData = {
        expense: [],
        income: [],
        eCats: ['Food', 'Travel', 'Rent'],
        iCats: ['Salary', 'Shares', 'Extra'],
        currency: {name: 'USD', symbol: '$'},
        ...storedData
    }

    const [appState, dispatch] = useReducer(budgetReducer, initData);

    // const [budgetData, setBudgetData] = useState(initData);
    // const [icats, setIcats] = useState(JSON.parse(localStorage.getItem('icats')) || ['Food', 'Travel', 'Rent'])

    return (
        <ExpenseContext.Provider value={{
            appState,
            dispatch
        }}>
            {props.children}
        </ExpenseContext.Provider>
    )

}

export { ExpenseProvider, ExpenseContext }

