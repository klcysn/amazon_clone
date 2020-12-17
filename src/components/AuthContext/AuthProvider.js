import React, {createContext, useState} from "react"

export const AuthContext = createContext()

export const AuthProvider = (props) =>{
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [detailProps, setDetail] = useState({})

    const setDetailProps = (items) => {
        setDetail(items)
    }

    const authenticate = () =>{
        setLoggedIn(s => !s)
    }
    return(
        <AuthContext.Provider value ={{isLoggedIn, authenticate, setDetailProps, detailProps}}>
            {props.children}
        </AuthContext.Provider>
    )
}