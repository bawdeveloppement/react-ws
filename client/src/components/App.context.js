import React, { createContext, useEffect, useReducer, useState } from "react";

const InitialState = {
    status: false, // true == Server is online
    updateStatus: () => {},
    user: {
        token : localStorage.getItem("token")
    },
    updateUser: () => {}
}

const UserReducer   = (state, action) => {
    switch (action) {
        case 'update_token': {
            localStorage.setItem("token", action.payload);
            return Object.assign({}, state, { token: localStorage.getItem("token") });
        }
        default:
            return state;
    }
} 

const AppContext    = createContext(InitialState);

const AppContextProvider = ({ children }) => {
    const [userState, userDispatch] = useReducer(UserReducer, InitialState.user);
    const [status, setStatus] = useState(InitialState.status);
    
    useEffect(() => {
        console.log(userState);
    }, [userState]);

    return <AppContext.Provider value={{
        status,
        updateStatus: setStatus,
        user: userState,
        updateUser: (v) => userDispatch({ type: "update_token", payload: v }),
    }}>{children}</AppContext.Provider>
};

const AppContextConsumer = AppContext.Consumer;

export { AppContextProvider, AppContextConsumer, AppContext};