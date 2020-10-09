import React, { useContext, useEffect, useReducer } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../../App.context";
import Field from "../../Field/Field";

const PasswordInitialState      = { valid: false, value: "" };
const EmailInitialState         = { valid: false, value: "" };
const SurePassordInitialState   = { valid: false, value: "" };

const FieldReducer  = (state, action) => {
    switch(action.type) {
        case 'valid':
            return Object.assign({}, state, { valid: action.payload });
        case 'value':
            return Object.assign({}, state, { value: action.payload })
        default:
            return state;
    }
}

const Signup = ({ goToSignin }) => {
    const context = useContext(AppContext);
    const [emailState, emailDispatch] = useReducer(FieldReducer, EmailInitialState);
    const [passwordState, passwordDispatch] = useReducer(FieldReducer, PasswordInitialState);
    const [surePasswordState, surePasswordDispatch] = useReducer(FieldReducer, SurePassordInitialState);
    
    useEffect(() => {
        console.log(emailState);
    }, [emailState]);

    const signup_fn = () => {
      fetch("http://localhost:8080/auth/signup", { 
        mode: "cors", 
        method: "PUT", 
        body: JSON.stringify({
          email: emailState.value,
          password: passwordState.value,
          surePassword: surePasswordState.value
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      // .then(j => context.updateUser(j))
      .then(j => {
        console.log(j);
        return context.updateUser(j)
      })
      .catch(err => console.error(err));
    }
    return context.user && context.user.token ? <Redirect to="/"></Redirect> : <form onSubmit={(event) => event.preventDefault()}>
      <h2 className="text-xl my-1 font-bold text-gray-700 font-mono">Signup</h2>
      <hr className="mb-4"></hr>
      <Field
        type="email" 
        name="Email"
        autoComplete="email" 
        dispatch={emailDispatch}
        checkFrom={{
            url: "/check/email",
            method: "post",
            resType: "json"
        }}
      />
      <Field
          type="password"
          name="Password"
          autoComplete="new-password"
          dispatch={passwordDispatch}
      />
      <Field
          type="password"
          name="Confirm password"
          autoComplete="new-password"
          dispatch={surePasswordDispatch}
      />
      <div className="my-1 flex justify-between">
        <button 
          className="px-4 py-2 mr-2 bg-teal-500 rounded text-white font-bold text-md"
          onClick={signup_fn} 
          disabled={passwordState.value !== surePasswordState.value || emailState.value.length === 0 || !context.status}>Signup</button>
        <div className="text-teal-500 cursor-pointer self-center px-2 font-bold" onClick={goToSignin}>Signin</div>
      </div>
    </form>
  }
export default Signup;