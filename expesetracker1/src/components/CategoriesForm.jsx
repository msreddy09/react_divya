import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { ExpenseContext } from "../contexts/BudgetContext";



const CatergoriesForm = (props) => {

    const {icats, setIcats} = useContext(ExpenseContext);
    const [catFormData, setCatFormData] = useState('');

    const handleInputChange = (event) => {
        setCatFormData(event.target.value);
    }

    const handleSaveTransaction = () => {
        setIcats([...icats, ...catFormData.split(',')])
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