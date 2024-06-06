
import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/BudgetContext";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const Income = ({toggle}) => {
   const { income } = useContext(ExpenseContext)
   return (<div>
      <h3>Income List</h3>

      {income.length === 0 && <div>
         <p>No Income transactions are available</p>
         <Button color="primary" onClick={() => toggle()}> Add New Income Transaction</Button>
      </div>}

      <ListGroup>
         {income.map((trans, ind) => {
            return <ListGroupItem>
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                  <div>
                     {trans.catType}
                     <p><small class="text-body-secondary">{trans.trandate}</small></p>
                  </div>
                  <div>
                     {parseInt(trans.amount).toFixed(2)}
                  </div>
               </div></ListGroupItem>
         })}

      </ListGroup>
   </div>)
}

export default Income;