import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./registration.css";

function RegistrationForm(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: null

    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const sendDetailsToServer = () => {
        console.log("check details")
        setState(prevState => ({
            ...prevState,
            successMessage: "data submitted successfully"
        }));

    }

    const redirectToLogin = () => {
        props.updateTitle("Login");
        props.history.push('/login');
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (state.password == state.confirmPassword) {
            sendDetailsToServer();
        } else {
            setState(prevState => ({
                ...prevState,
                successMessage: "password didnt match "
            }));
        }
    }
    return ( < div >
        <
        form >
        <
        div className = "form-group text-left" >
        <
        label htmlFor = "exampleInputEmail1" > Email Address < /label>  <
        input type = "email"
        className = "form-control "
        id = "email"
        onChange = { handleChange }
        placeholder = "email" / >
        <
        /div> <
        div className = "form-group  text-left" >
        <
        label htmlFor = "exampleInputPassword1" > Password < /label> <
        input type = "password"
        id = "password"
        className = "form-control"
        onChange = { handleChange }
        placeholder = "password" / >
        <
        /div> <
        div className = "form-group  text-left" >
        <
        label > Confirm Password < /label> <
        input type = "password"
        className = "form-control"
        id = "confirmPassword"
        onChange = { handleChange }
        placeholder = "confirmPassword" / >
        <
        /div> <
        br / >
        <
        button className = "btn btn-primary"
        onClick = { handleClick }
        type = "submit" > Register < /button> < /
        form >
        <
        div className = "alert alert-success"
        style = {
            { display: state.successMessage ? "block" : "none" }
        }
        role = "alert" > { state.successMessage } < /div> <
        div className = "mt-2" >
        <
        span > Already have an account ? < /span>  <
        span className = "loginText login-cta"
        onClick = {
            () => redirectToLogin()
        } > Login Here < /span> < /
        div >


        <
        /div>)

    }
    export default withRouter(RegistrationForm);