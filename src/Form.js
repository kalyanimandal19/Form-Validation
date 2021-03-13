import React from 'react';
import './App.css';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';


const Form = () => {
    const initialValues = {
        firstName: null,
        lastName: null,
        email: null,
        password: null
    };
    const login = () => {
        console.log(values);
    };

    const { values, handleChange, handleSubmit, formErrors } = useForm(login, initialValues, validate);

    return (
        <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className="firstName">
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        type="text"
                        className={`input ${formErrors.firstName && 'error'}`}
                        name="firstName"
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        noValidate
                    />
                    {
                        formErrors.firstName !== null && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                        )
                    }
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        type="text"
                        className={`input ${formErrors.lastName && 'error'}`}
                        name="lastName"
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                        noValidate
                    />
                    {
                        formErrors.lastName !== null && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                        )
                    }
                </div>
                <div className="email">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        className={`input ${formErrors.email && 'error'}`}
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        noValidate
                    />
                    {
                        formErrors.email !== null && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )
                    }
                </div>
                <div className="password">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        className={`input ${formErrors.password && 'error'}`}
                        name="password"
                        onChange={handleChange}
                        placeholder="Enter Your Password"
                        noValidate
                    />
                    {
                        formErrors.password !== null && (
                            <span className="errorMessage">{formErrors.password}</span>
                        )
                    }
                </div>
                <div className="createAccount">
                    <button type="submit">Create Account</button>
                    <small>Already have an account?</small>
                </div>
            </form>
        </div>
    )
}

export default Form
