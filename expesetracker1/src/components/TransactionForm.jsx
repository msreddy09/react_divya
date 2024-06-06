import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { ExpenseContext } from "../contexts/BudgetContext";

const TransactionForm = (props) => {

    const [tranType, setTranType] = useState('Expense');

    const expenseContextData = useContext(ExpenseContext);


    const [transFormData, setTranFormData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target
        const formData = {
            ...transFormData,
            [name]: value
        }
        setTranFormData(formData);

    }

    const handleSaveTransaction = () => {
        
         if(transFormData.tranType === "Income"){
            let obj = {
                income: [...expenseContextData.income, transFormData],
                expense: [...expenseContextData.expense]
            }
            expenseContextData.setBudgetData(obj)
         }
         if(transFormData.tranType === "Expense" ) {
            let obj = {
                income: [...expenseContextData.income],
                expense: [...expenseContextData.expense , transFormData]
            }
            expenseContextData.setBudgetData(obj)
         }
         props.toggle();
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} >
            <ModalHeader toggle={props.toggle} >Trasaction </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label
                            for="exampleEmail"
                            hidden
                        >
                            Trasaction Type
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="tranType"
                            type="select"
                            onChange={handleInputChange}
                        >
                            <option>
                            </option>
                            <option>
                                Expense
                            </option>
                            <option>
                                Income
                            </option>


                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="exampleEmail"
                            hidden
                        >
                            Category Type
                        </Label>
                        {transFormData.tranType === 'Expense' && <Input
                            id="cattype"
                            name="catType"
                            type="select"
                            onChange={handleInputChange}
                        >
                            <option>
                            </option>
                            {expenseContextData.icats.map((ic, ind) => <option>{ic}</option>)}

                        </Input>}
                        {transFormData.tranType === 'Income' && <Input
                            id="cattype"
                            name="catType"
                            type="select"
                            onChange={handleInputChange}
                        >
                            <option>
                            </option>
                            <option>
                                Salary
                            </option>
                            <option>
                                Shares
                            </option>

                        </Input>}
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label
                            for="amount"
                            hidden
                        >
                            Amount
                        </Label>
                        <Input
                            id="amount"
                            name="amount"
                            placeholder="Amount"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="examplePassword"
                            hidden
                        >
                            Date
                        </Label>
                        <Input
                            id="trandate"
                            name="trandate"
                            placeholder="Date"
                            type="date"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    {' '}
                    <Button color="primary" onClick={handleSaveTransaction}>
                        Save
                    </Button>
                    <Button onClick={props.toggle}>
                        Cancel
                    </Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default TransactionForm