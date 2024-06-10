import React, { useContext } from "react";
import { CardTitle, Card, Col, Button, Row, CardText } from "reactstrap";
import { ExpenseContext } from "../contexts/BudgetContext";

const Report = () => {

   const expContextData = useContext(ExpenseContext);

   const getTotalExpense = () => {
      const total = expContextData.expense.reduce((acc, exp, ind) => parseInt(exp.amount) + acc , 0) || 0;
      return total.toFixed(2);
   }
   const getTotalIncome = () => {
      const total = expContextData.income.reduce((acc, inc, ind) => parseInt(inc.amount) + acc , 0) || 0;
      return total.toFixed(2);
   }

   const getTotalOutStanding = () => {
      const totalOutstandAmount = getTotalIncome() - getTotalExpense();
      return totalOutstandAmount.toFixed(2);
   }

   return (<div>
      <Row>
         <Col sm="4">
            <Card body>
               <CardTitle tag="h5">
                  Total Income
               </CardTitle>
               <CardText>
               {"$ " + getTotalIncome()}
               </CardText>

            </Card>
         </Col>
         <Col sm="4">
            <Card body>
               <CardTitle tag="h5">
                  Total Expenses
               </CardTitle>
               <CardText>
                  {"$ " +  getTotalExpense()}
               </CardText>

            </Card>
         </Col>
         <Col sm="4">
            <Card body>
               <CardTitle tag="h5">
                  Outstanding
               </CardTitle>
               <CardText>
                 {"$ " + getTotalOutStanding()}
               </CardText>

            </Card>
         </Col>
      </Row>
   </div>)
}

export default Report;