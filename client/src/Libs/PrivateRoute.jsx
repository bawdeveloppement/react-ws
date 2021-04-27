import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { API_URL } from "../components/App.constant";

const PrivateRoute = ({ path, children }) => {
    const [tokenIsValid, setTokenIsValid] = useState(null);

    const checkToken = () => {
        fetch (API_URL + "/check/token", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                token : localStorage.getItem("token") 
            })
        })
        .then(res => res.json())
        .then(msg => msg.type === "OK" ? setTokenIsValid(true) : setTokenIsValid(false))
        .catch(err => setTokenIsValid(false))
    }
    
    return <Route path={path}>
        { tokenIsValid === null ? checkToken() : tokenIsValid === false ? <Redirect to="/auth"></Redirect> : children }
    </Route> 
}

export default PrivateRoute