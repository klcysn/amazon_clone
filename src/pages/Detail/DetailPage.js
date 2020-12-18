import React, {useContext} from "react"
import {AuthContext} from "../../components/AuthContext/AuthProvider"
import StarIcon from '@material-ui/icons/Star';
import "./DetailPageStyle.scss"
import SearchBar from "../../components/searchBar/SearchBar"

export const DetailPage = () => {
    const {detailProps, addBasket} = useContext(AuthContext)
    const startList = []
    for(let i=0; i<detailProps.rating; i++){
      startList.push(<StarIcon className="star" />)
    }
    const onAdd = () =>{
        addBasket(detailProps)
    }
    return(
        <div>
            <SearchBar />
            <div className="detail-container">
                <p className="title-detail">{detailProps.title}</p>
                <p className="star-detail">{startList}</p>
                <img className="image" src={detailProps.image} alt=""/>
                <p className="price">${detailProps.price}</p>
                <div className="add-button">
                    <p className="button-text" onClick={onAdd}>Add to Basket</p>
                </div>
            </div>
        </div>
    )
}