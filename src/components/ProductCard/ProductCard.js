import "./ProductCardStyle.scss"
import StarIcon from '@material-ui/icons/Star';

export default function ProductCard({title, price, rating, image, id}){
  const startList = []
  for(let i=0; i<rating; i++){
    startList.push(<StarIcon className="star" />)
  }
  return(
    <div className="product-card-container">
      <div className="header-container">
        <p className="title">{title}</p>
        <p className="price">${price}</p>
        <p className="rating">{startList}</p>
      </div>
      <div className="img-container">
        <img className="product-img" src={image} />
      </div>
      <div className="add-button">
        <p className="button-text">Add to Basket</p>
      </div>
    </div>
  )
}