import React, { useState } from "react";
import { Form, Modal, ModalBody, ModalHeader } from "reactstrap";

const DemoState = () => {

    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({});

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    
    const handleDataSubmit = (e) => {
        e.preventDefault();
        setUsers([
            ...users,
            formData
        ])
        setShowModal(false);

    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })

    }


    return (
        <div>
            <button onClick={() => setShowModal(true)}>ADD DATA</button>

            <ul>
                {users.map( (el, ind) => {
                    return <li>{el.fname} {el.lname}</li>
                })}
            </ul>

            <Modal isOpen={showModal} toggle={toggleModal} >

                <ModalHeader >Trasaction </ModalHeader>
                <ModalBody>
                    <Form>
                        <div>
                            <input type="text" name='fname'  onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name='lname' onChange={handleInputChange} />
                        </div>
                        <div>
                            <button onClick={handleDataSubmit}>Submit</button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default DemoState