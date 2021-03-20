import React from "react";
import "./AlertComponent.css";

export default function AlertComponent() {

    return ( < div className = "alert alert - danger"
        role = "alert"
        id = "alertPopup" >
        <
        div className = "d-flex alertMessage" >
        <
        span > { props.errorMessage } < /span> <
        button type = "button"
        className = "close"
        aria - label = "close" >
        <
        span aria - hidden "true" > & times; < /span>

        <
        /button> < /
        div >

        <
        /div>)

    }