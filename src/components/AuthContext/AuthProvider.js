import React, {useContext, createContext, useState} from "react"

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [isLoggedIn, setLoggedIn] = useState(false)
    const authenticate = () =>{
        setLoggedIn(s => !s)
    }
    return(
        <AuthContext.Provider value ={isLoggedIn, setLoggedIn}>
            {children}
        </AuthContext.Provider>
    )
}