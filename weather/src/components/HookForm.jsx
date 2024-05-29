import React from "react";
import { useForm } from 'react-hook-form';

const HookForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({mode: 'onBlur'});

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
            console.log(errors)
            
        })}>
            <div><input {...register('firstname')} /></div>
            <div><input {...register('lastname', { required: true, minLength:10 })} /></div>
            {errors.lastname &&  errors.lastname.type==='required' && <div>Last name is required.</div>}
            {errors.lastname && errors.lastname.type==='minLength' && <div>Last name must be 10 chars.</div>}
            <div><input {...register('age', {required: true, pattern: /\d+/, min: 18})} /></div>
            {errors.age && errors.age.type==='required' && <div>Age is required.</div>}
            {errors.age && errors.age.type==='pattern' && <div>Age should be in digits.</div>}
            {errors.age && errors.age.type==='min' && <div>Age should be 18 and above.</div>}
            <input type="submit" />

        </form>
    )
}

export default HookForm;