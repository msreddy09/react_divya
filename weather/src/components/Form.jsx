import React, { useRef, useState } from "react";
import SimpleReactValidator from 'simple-react-validator';


const Form = () => {

    const simpleReactValidator = useRef(new SimpleReactValidator({
        messages: {
            required: 'Field is required...'
        }
    }))

    const [formData, setFormData] = useState({
        username: '',
        subject: '',
        state: ''
    });

    const [usernameError, setUsernameError] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubimt = (event) => {
        // setIsSubmit(true);
        event.preventDefault();

        if(simpleReactValidator.current.allValid()) {
            alert('form is valid')
        }else {
            simpleReactValidator.current.showMessages();
        }

        // event.preventDefault();
        // if (formData.username === '') {
        //     setUsernameError('required')
        //     return;
        // }
        // if (formData.username.length < 3) {
        //     setUsernameError('Username should be atleast 3 chars')
        //     return;
        // }

        //all condition or validations goes here.


        console.log(formData);

        //api call to hit server

    }

    return (
        <form >
            <div className={isSubmit && formData.username === '' ? 'error' : ''}>
                <label>Name</label>
                <input type="text" name='username' value={formData.username} onChange={handleInputChange} />
                {/* <div className="error-text">{usernameError}</div> */}
                {simpleReactValidator.current.message('username', formData.username, 'required|alpha')}
            </div>
            <div className={isSubmit && formData.subject === '' ? 'error' : ''}>
                <label>Subject</label>
                <input type="text" name='subject' value={formData.subject} onChange={handleInputChange} />
                {simpleReactValidator.current.message('subject', formData.subject, 'required|alpha')}
            </div>
            <div>
                <label>State</label>
                <select name="state" value={formData.state} onChange={handleInputChange}>
                    <option value=""></option>
                    <option value="ap">Andhra Pradesh</option>
                    <option value="tg">Telangana</option>
                    <option value="tn">Tamilanadu</option>
                </select>
            </div>
            <div>
                {/* <input type="submit" /> */}
                <button onClick={handleSubimt}>Submit</button>
            </div>
        </form>
    )
}
export default Form;