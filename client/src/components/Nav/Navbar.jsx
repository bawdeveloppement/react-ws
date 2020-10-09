import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => 
{
    const { pathname } = useLocation();
    return pathname !== "/tchat" ? <div id="header" className="bg-white z-10 shadow px-2 py-3 font-bold flex justify-between">
        <h2 className="text-teal-500">Powered by Baw</h2>
        <div>
            <button className="px-2">Login</button>
            <button className="px-2 shadow-outline rounded ">Signup</button>
        </div>
    </div> : null
}

export default Navbar;