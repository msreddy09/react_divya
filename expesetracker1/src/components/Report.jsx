import React, { useContext, useEffect, useState } from "react";
import { CardTitle, Card, Col, Button, Row, CardText, Table } from "reactstrap";
import { ExpenseContext } from "../contexts/BudgetContext";

const Report = () => {

   const [topExpList, setTopExpList] = useState([]);
   const { appState } = useContext(ExpenseContext);

   const getTotalExpense = () => {
      const total = appState.expense.reduce((acc, exp, ind) => parseInt(exp.amount) + acc, 0) || 0;
      return total.toFixed(2);
      // return 0.00
   }
   const getTotalIncome = () => {
      const total = appState.income.reduce((acc, inc, ind) => parseInt(inc.amount) + acc, 0) || 0;
      return total.toFixed(2);
      // return 0.00;
   }

   const getTotalOutStanding = () => {
      const totalOutstandAmount = getTotalIncome() - getTotalExpense();
      return totalOutstandAmount.toFixed(2);
      // return 0.00;
   }

   useEffect(() => {

      const { expense, income } = appState;

      const formtdata = expense.map((el, ind) => {
         return {
            ...el,
            id: ind + 1
         }
      })
      console.log(formtdata);

      const getTopTransaction = (number) => {
         let sortEspense = expense.sort((a, b) => parseInt(b.amount) - parseInt(a.amount));
         return sortEspense.slice(0, number)
      }

      const topList = getTopTransaction(3);

      setTopExpList(topList);

   }, [appState])

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
                  {appState.currency.symbol + " " + getTotalExpense()}
               </CardText>

            </Card>
         </Col>
         <Col sm="4">
            <Card body>
               <CardTitle tag="h5">
                  Outstanding
               </CardTitle>
               <CardText>
                  {appState.currency.symbol + " " + getTotalOutStanding()}
               </CardText>

            </Card>
         </Col>
      </Row>
      <Row className="mt-2">
         <h3>Top 3  Expense Transactions</h3>
         <Table
         >
            <thead>
               <tr>
                  <th>
                     #
                  </th>
                  <th>
                     Category
                  </th>
                  <th>
                     Date
                  </th>
                  <th>
                     Amount
                  </th>
               </tr>
            </thead>
            <tbody>
               {topExpList.length === 0 && <div style={{ textAlign: 'center' }}> No transaction were recorded.</div>}
               {topExpList.map((exp, ind) => {

                  return <tr>
                     <th>
                       {exp.id}
                     </th>
                     <td>
                        {exp.catType}
                     </td>
                     <td>
                        {exp.trandate}
                     </td>
                     <td>
                        {exp.amount}
                     </td>
                  </tr>
               })}

            </tbody>
         </Table>
      </Row>
   </div>)
}

export default Report;