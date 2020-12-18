import React, {createContext, useState} from "react"

export const AuthContext = createContext()

export const AuthProvider = (props) =>{
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [detailProps, setDetail] = useState({})
    const [basket, setBasket] = useState([])
    const [productIndex, setProductIndex] = useState(0)

    const setDetailProps = (items) => {
        setDetail(items)
    }

    const authenticate = () =>{
        setLoggedIn(s => !s)
    }

    const addBasket = (item) =>{
        setBasket([...basket,{...item, productIndex}])
        setProductIndex(productIndex + 1)
    }
    return(
        <AuthContext.Provider value ={{isLoggedIn, authenticate, setDetailProps, detailProps, basket, addBasket}}>
            {props.children}
        </AuthContext.Provider>
    )
}