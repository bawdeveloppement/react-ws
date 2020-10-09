import React, { Component } from "react";

const Message = ({ data, onProfilClick }) => {
    const formatDate = date => {
        let currentTime = Date.now() - date;
        if (currentTime / 1000 < 60) return "Il y a " + Math.floor(currentTime / 1000) + (Math.floor(currentTime / 1000) <= 1 ? " seconde." : " secondes.");
        else if ((currentTime / 1000) / 60 < 60) return "Il y a " + Math.floor(currentTime / 1000 / 60) + (Math.floor(currentTime / 1000 / 60) <= 1 ? " minute" : " minutes.");
    }
    return <div className="flex p-2 rounded-sm flex-wrap bg-white shadow border-l-4 border-teal-500">
        <div className="mr-4 w-16 cursor-pointer" onClick={() => onProfilClick(data.user_id)}>
            <img className="w-16 rounded-full" src="https://via.placeholder.com/32x32"></img>
        </div>
        <div className="flex-1 flex flex-col content-center align-center self-center">
            <div><span className="font-bold">{data.owner}</span> <span className="text-sm text-gray-700">{formatDate(data.when)}</span></div>
            <div className="text-gray-800">{data.text}</div>
        </div>
    </div>
}

export default Message;