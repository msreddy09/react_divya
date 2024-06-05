import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const TransactionForm = (props) => {

    const [tranType, setTranType] = useState('Expense');

    const handleTranTypeChange = (event) => {
        setTranType(event.target.value);
    }

    return (
        <Modal isOpen={props.modal}  toggle={props.toggle} >
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
                            name="select"
                            type="select"
                            onChange={handleTranTypeChange}
                        >
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
                        {tranType === 'Expense' && <Input
                            id="cattype"
                            name="cattype"
                            type="select"
                        >
                            <option>
                                Food
                            </option>
                            <option>
                                Travel
                            </option>

                        </Input>}
                        {tranType === 'Income' && <Input
                            id="cattype"
                            name="cattype"
                            type="select"
                        >
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
                        />
                    </FormGroup>
                    {' '}
                    <Button color="primary">
                        Submit
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