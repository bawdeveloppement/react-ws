import React, { useState } from "react";
import EmojiLayout from "../Smiley/EmojiLayout";

const TchatBottombar = ({ events }) => {
    const [ msgField, setMsgField ] = useState("");
    const { handleSendMessage } = events;

    const SendMessage = () => {
        handleSendMessage(msgField);
        setMsgField("");
    }
    const handleKeyPress = event => {
        const x = event.which || event.keyCode;
        if (x === 13 && msgField.length !== 0) {
            SendMessage()
        }
    }
    return <div className="flex z-30 border-t-2 shadow flex-row items-center flex-wrap bg-white justify-between shadow">
        <svg className="z-10 h-full leading-snug font-normal text-center text-gray-500 hover:text-gray-600 cursor-pointer bg-transparent rounded text-base w-10 px-2 py-3"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <input
            className="appearance-none flex-1 py-2  w-full tracking-wide placeholder-gray-600 align-baseline text-gray-700 border-solid font-bold bg-white bg-white text-sm  outline-none"
            placeholder="écris ici ..."
            value={msgField}
            onKeyPress={handleKeyPress}
            onChange={event => setMsgField(event.target.value)}>
        </input>
        
        <button 
        className="font-bold text-teal-600 mx-2 rounded  rotate-45"
        onClick={SendMessage}
        disabled={msgField.length === 0}>
        <svg className="z-10 h-full leading-snug font-normal text-center text-teal-600 hover:text-gray-700 cursor-pointer bg-transparent rounded text-base w-10 px-2 py-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        </button>
  </div>
}

export default TchatBottombar;