import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { ExpenseContext } from "../contexts/BudgetContext";



const CatergoriesForm = (props) => {

    const { appState, dispatch } = useContext(ExpenseContext);
    const [catFormData, setCatFormData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCatFormData({
            ...catFormData,
            [name]: value
        }
        )
    }

    const handleSaveTransaction = () => {

        if (catFormData.categoryType === 'Income') {

            dispatch({
                type: 'addICategory',
                payLoad: catFormData.category
            })
        }
        if (catFormData.categoryType === 'Expense') {

            dispatch({
                type: 'addECategory',
                payLoad: catFormData.category
            })
        }
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} >
            <ModalHeader toggle={props.toggle} >Categories Form </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label
                            for="category"
                            hidden
                        >
                            Type
                        </Label>
                        <Input
                            id="catType"
                            name="categoryType"
                            type="select"
                            placeholder="Category"
                            onChange={handleInputChange}
                        >
                             <option>
                             </option>
                            <option>Income
                            </option>
                            <option>Expense
                            </option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="category"
                            hidden
                        >
                            Amount
                        </Label>
                        <Input
                            id="cat"
                            name="category"
                            placeholder="Category"
                            onChange={handleInputChange}
                        />
                        <small>you can enter multiple categories by separating with comma</small>
                    </FormGroup>

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

export default CatergoriesForm;