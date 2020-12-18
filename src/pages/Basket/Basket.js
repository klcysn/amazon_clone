import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../components/AuthContext/AuthProvider"
import SearchBar from "../../components/searchBar/SearchBar"
import "./BasketStyle.scss"

export const Basket = () => {
    const { basket } = useContext(AuthContext)
    const [writedList, setWritedList] = useState([])

    const findQuantity = (id) =>{
        const quantity = basket.filter((item) =>item.id === id)
        return quantity.length
    }
    useEffect(()=>{
        let filteredList = []
        filteredList = basket.filter((item) => item.productIndex === basket.findIndex(x=>x.id === item.id))
        setWritedList(filteredList)
    }, [basket])

    return (
        <div>
            <SearchBar />
            {
                writedList?.map(({image, title, price, id})=>{
                        return(
                            <div className="basket-container">
                                <img className="basket-img" src={image} alt={title.split(" ")[0]} />
                                <p className="basket-title">{title}</p>
                                <p className="basket-price">${price}</p>
                                <div className="basket-button-container">
                                    <p className="increase-decrease-button">-</p>
                                    <p className="basket-quantity">{findQuantity(id)}</p>
                                    <p className="increase-decrease-button">+</p>
                                </div>
                            </div>
                        )
                })
            }
        </div>
    )
}