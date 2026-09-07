"use client";
import React, { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCuts = (item) => {
        setCart(prev => [item, ...prev]);
    };

    const contextInfo = {
        addToCuts,
        cart,
    };

    return (
        <context.Provider value={contextInfo}>
            {children}
        </context.Provider>
    );
};

export default ContextProvider;