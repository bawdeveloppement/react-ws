import React, {
    useState,
    useEffect,
    createContext,
    useRef
} from "react";

const { Provider, Consumer } = createContext({
    socket: null,
    current_state: false,
    event_messages: []
});

const ConquestContextProvider = ({ url, children }) => {
    const [isPaused] = useState(false)
    const [eventMessages, setEventMessage] = useState([]);
    const [currentState, setCurrentState] = useState(false);
    const ws = useRef();

    //#region On Mount
    useEffect(() => {
        ws.current = new WebSocket(`ws://${url ? url : "localhost:80"}`)
        ws.current.onopen = (event) => {
            event.target.send("hello")
            setCurrentState(true)
        };
        ws.current.onclose = () => setCurrentState(false);
        return () => { ws.current.close() };
    }, [url]);
    //#endregion

    //#region On Message
    useEffect(() => {
        if (!ws.current) return;

        ws.current.onmessage = e => {
            if (isPaused) return;
            setEventMessage(eventMessages.concat(e));
        }

    }, [isPaused, eventMessages]);
    //#region 

    return <Provider 
            value={{
                socket: ws.current,
                current_state: currentState,
                event_messages: eventMessages
            }}>
            {children}
    </Provider>
}

export { ConquestContextProvider, Consumer as ConquestContextConsumer};