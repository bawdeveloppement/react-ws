import React, { useState } from "react";

const Signin = ({ goToSignup }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login_fn = () => {
        fetch("http://localhost:8080/auth/signin", { 
        mode: "cors", 
        method: "put", 
        body: {
            email,
            password
        }
        .then(res => res.json())
        .then(j => console.log(j))
        .catch(err => console.error(err))
        });
    };

    return <form autoComplete="on" onSubmit={(event) => event.preventDefault()}>
        <input name="email" type="email" placeholder="email" autoComplete="email" value={email} onChange={({target}) => setEmail(target.value)}></input>
        <input name="password" type="password" placeholder="passsword" autoComplete="current-password" value={password} onChange={({target}) => setPassword(target.value)}></input>
        <button onClick={login_fn}>Connect</button>
        <span onClick={goToSignup}>Signup</span>
    </form>
}

export default Signin;