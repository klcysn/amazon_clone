import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../components/AuthContext/AuthProvider"
import SearchBar from "../../components/searchBar/SearchBar"
import "./BasketStyle.scss"

export const Basket = () => {
    const { basket, addBasket, removeFromBasket } = useContext(AuthContext)
    const [writedList, setWritedList] = useState([])

    const findQuantity = (id) =>{
        const quantity = basket?.filter((item) =>item.id === id)
        return quantity.length
    }
    useEffect(()=>{
        let filteredList = []
        filteredList = basket.filter((item, i) => i === basket.findIndex(x=>x.id === item.id))
        setWritedList(filteredList)
    }, [basket])
    const onAdd = (id)=>{
        addBasket(basket[basket.findIndex(x => x.id === id)])
    }
    const removeItem = (id) =>{
        const itemIndex = basket.findIndex(x => x.id === id)
        removeFromBasket(itemIndex)
    }
    return (
        <div>
            <SearchBar />
            {
                basket.length === 0
                ?
                <div className="empty-message-container">
                    <p className="empty-message">You haven't added any product in shopping basket yet.</p>
                </div>
                :
                writedList?.map(({image, title, price, id})=>{
                        return(
                            <div className="basket-container">
                                <img className="basket-img" src={image} alt={title?.split(" ")[0]} />
                                <p className="basket-title">{title}</p>
                                <p className="basket-price">${price}</p>
                                <div className="basket-button-container">
                                    <p className="increase-decrease-button" onClick={() => removeItem(id)}>-</p>
                                    <p className="basket-quantity">{findQuantity(id)}</p>
                                    <p className="increase-decrease-button" onClick={() => onAdd(id)}>+</p>
                                </div>
                            </div>
                        )
                })
            }
        </div>
    )
}