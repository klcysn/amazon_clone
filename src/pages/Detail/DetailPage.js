import React, {useContext} from "react"
import {AuthContext} from "../../components/AuthContext/AuthProvider"

export const DetailPage = () => {
    const {detailProps} = useContext(AuthContext)
    return(
        <div>
            <p>{detailProps.title}</p>
        </div>
    )
}