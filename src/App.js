import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import { Switch, Route} from "react-router-dom";

import Header from "./components/Header/header.js";
import Home from "./components/Home/home.js";
import LoginForm from "./components/LoginForm/login.js";
import RegistrationForm from "./components/RegistrationForm/registrationForm.js";

function App() {
const [title,updateTitle] = useState(null);
const [errorMessage, updateErrorMessage ] = useState(null);
  
    return ( 
        <div className = "App" >
<Header title={title}/>

<div className="container d-flex align-items-center flex-column">
<Switch>
<Route path="/" exact={true}>
  <RegistrationForm updateTitle={updateTitle}/>
</Route>
<Route path="/register">
  <RegistrationForm updateTitle={updateTitle} />
  </Route>
<Route  path="/login">
<LoginForm updateTitle={updateTitle} />
</Route>
<Route path="/home">
  <Home/>
</Route>
</Switch>
</div>

        <   
        /div>
   
    );
}

export default App;