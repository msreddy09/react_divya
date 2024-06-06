
import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ExpenseContext } from "../contexts/BudgetContext";

const Expense = (props) => {

    const { expense } = useContext(ExpenseContext);

    const handleButtonclick = () => {
        // budegetExp.dispatch({ type: 'exp', payload: { amount: 100 } })
        props.toggle();
    }

    return (<div>
        <h3>Expense List</h3>

        <ListGroup>
            {expense.map((trans, ind) => {
                return <ListGroupItem>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <div>
                            {trans.catType}
                            <p><small class="text-body-secondary">{trans.trandate}</small></p>
                        </div>
                        <div>
                            {parseInt(trans.amount).toFixed(2)}
                        </div>
                    </div>

                </ListGroupItem>
            })}

        </ListGroup>

    </div >

    )
}

export default Expense;