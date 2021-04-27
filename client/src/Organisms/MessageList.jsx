import React, { Component } from "react";
import Message from "../Molecules/Message";
import EmojiLayout from "../Components/Smiley/EmojiLayout";

// On va afficher que les { config.maxLastMsg } derniers messages. Par défault : 10
// 
const MessageList = ({ data, config, events }) => {
    const { msgList } = data;
    const { maxLastMsg } = config;
    const { handleProfilClick } = events;
    
    const messages = msgList.length !== 0 ? msgList.map((msg, id) => {
        if (id > msgList.length - maxLastMsg) {
            return <Message
              key={id}
              data={{ owner: "Test", text: msg.data, when: Date.now() }}
              onProfilClick={handleProfilClick}
            />
        }
    }) : <Message
        data={{
            owner: "Information", 
            text: "Bienvenue sur le tchat crée avec React", 
            when: Date.now()
        }}
        onProfilClick={handleProfilClick}
    />;
    
    return <div id="message-container" className="h-full overflow-auto p-2">
        {messages}
    </div>
}

export default MessageList;