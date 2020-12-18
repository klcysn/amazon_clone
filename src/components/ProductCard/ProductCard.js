import { useHistory } from "react-router-dom";
import "./ProductCardStyle.scss"
import StarIcon from '@material-ui/icons/Star';
import {useContext} from "react"
import {AuthContext} from "../AuthContext/AuthProvider"

export default function ProductCard({title, price, rating, image, id}){
  const {setDetailProps, addBasket} = useContext(AuthContext)
  const history = useHistory()
  const startList = []
  for(let i=0; i<rating; i++){
    startList.push(<StarIcon className="star" />)
  }
  const go = () =>{
    setDetailProps({title, price, rating, image})
    history.push(`/detail/${id}`)
  }
  const onAdd = () => {
    addBasket({title, price, rating, image, id})
  }
  return(
    <div className="product-card-container">
      <div className="header-container">
        <p className="title">{title}</p>
        <p className="price">${price}</p>
        <p className="rating">{startList}</p>
      </div>
      <div className="img-container" onClick={go}>
        <img className="product-img" src={image} alt="" />
      </div>
      <div className="add-button">
        <p className="button-text" onClick={onAdd}>Add to Basket</p>
      </div>
    </div>
  )
}