import { createContext, useContext, useState } from "react";
import { ThemeContext } from "./AllContext";

export const Theme = ({ children}) =>{
    const [ theme, setTheme ] = useState("light");

    const toggle = ()=>{
        setTheme((prev)=>(prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
