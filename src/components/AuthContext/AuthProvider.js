import React, {createContext, useState} from "react"

export const AuthContext = createContext()

export const AuthProvider = (props) =>{
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [detailProps, setDetail] = useState({})
    const [basket, setBasket] = useState([])

    const setDetailProps = (items) => {
        setDetail(items)
    }

    const authenticate = () =>{
        setLoggedIn(s => !s)
    }

    const addBasket = (item) =>{
        setBasket([...basket, item])
    }
    const removeFromBasket = (itemIndex)=>{
        const removedList = basket.filter((item, i) => i !== itemIndex)
        setBasket(removedList)
    }
    return(
        <AuthContext.Provider value ={{isLoggedIn, authenticate, setDetailProps, detailProps, basket, addBasket, removeFromBasket}}>
            {props.children}
        </AuthContext.Provider>
    )
}