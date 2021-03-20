import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function LoginForm(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
    })
    const redirectToRegister = () => {
        props.updateTitle("Register");
        props.history.push("./register");
    }
    const handleChange = () => {

    }
    return ( < div classNam = "col-12" >
        <
        label > Email Address < /label> <
        input id = "email"
        placeholder = "email"
        value = { state.email }
        onChange = { handleChange }
        / >  <
        label > Password < /label> <
        input type = "password"
        id = "password"
        value = {
            state.password
        }
        placeholder = "password" /
        >

        <
        button type = "submit"
        className = "btn btn-primary" > Submit < /button> <
        div className = "registerMessage" >
        <
        span > Dont have an Account ? < /span> <
        span className = "loginText"
        onClick = {
            () => redirectToRegister()
        } > Register < /span> < /
        div > <
        /
        div > )

}
export default withRouter(LoginForm);