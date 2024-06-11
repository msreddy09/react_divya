import React, { useContext } from "react";
import { CardTitle, Card, Col, Button, Row, CardText } from "reactstrap";
import { ExpenseContext } from "../contexts/BudgetContext";

const Report = () => {

   const {appState} = useContext(ExpenseContext);

   const getTotalExpense = () => {
      const total = appState.expense.reduce((acc, exp, ind) => parseInt(exp.amount) + acc , 0) || 0;
      return total.toFixed(2);
      // return 0.00
   }
   const getTotalIncome = () => {
      const total = appState.income.reduce((acc, inc, ind) => parseInt(inc.amount) + acc , 0) || 0;
      return total.toFixed(2);
      // return 0.00;
   }

   const getTotalOutStanding = () => {
      const totalOutstandAmount = getTotalIncome() - getTotalExpense();
      return totalOutstandAmount.toFixed(2);
      // return 0.00;
   }

   return (<div>
      <Row>
         <Col sm="4">
            <Card body>
               <CardTitle tag="h5">
                  Total Income
               </CardTitle>
               <CardText>
               {appState.currency.symbol + " " + getTotalIncome()}
               </CardText>

            </Card>
         </Col>
         <Col sm="4">
            <Card body>
               <CardTitle tag="h5">
                  Total Expenses
               </CardTitle>
               <CardText>
                  {appState.currency.symbol  + " " +  getTotalExpense()}
               </CardText>

            </Card>
         </Col>
         <Col sm="4">
            <Card body>
               <CardTitle tag="h5">
                  Outstanding
               </CardTitle>
               <CardText>
                 {appState.currency.symbol  + " " +  getTotalOutStanding()}
               </CardText>

            </Card>
         </Col>
      </Row>
      <Row className="mt-2">
         <h3>Top 3 Transactions</h3>
      </Row>
   </div>)
}

export default Report;