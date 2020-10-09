import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../App.constant";
import { AppContext } from "../App.context";

const Field = ({ type, name, ref, placeholder, checkFrom, isValid, autoComplete, dispatch }) => {
    const app_context = useContext(AppContext);
    const [value, setValue] = useState("")
    const [message, setMsg] = useState(null)

    useEffect(() => {
        if (message && message.type && message.type === "OK") {
            dispatch({ type: "valid", value: true });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

    useEffect(() => {
        // Add regex checking if neccesary
        if (app_context.status) {
            if (value.length !== 0 && checkFrom && checkFrom.url) {
                fetch(API_URL + checkFrom.url, {
                    method: checkFrom.method ? checkFrom.method : "GET",
                    mode: checkFrom.mode ? checkFrom.mode : "cors",
                    body: `{"${name}":"${value}"}`
                })
                .then   (res => checkFrom.resType === "json" ? res.json() : res.text())
                .then   (msg => setMsg(msg))
                .catch  (err => console.error("err"))
            }
        }
        dispatch({ type: "value", payload: value });
    // Because we only want to update the useffect when value change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return <div className="mb-4 border-teal-500 border-solid border-b-1">
        <input
            className="w-full placeholder-black px-2 py-1"
            ref={ref}
            type={type ? type : "text"}
            name={name ? name : "name"}
            placeholder={placeholder ? placeholder : name}
            onChange={({ target }) => setValue(target.value)}
            autoComplete={autoComplete ? autoComplete : "off"}>
        </input>
        
    </div>
}

export default Field;