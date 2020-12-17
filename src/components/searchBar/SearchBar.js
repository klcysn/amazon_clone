import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./SearchBar.scss"
import { useHistory } from "react-router-dom";

export default function SearchBar(){
  const history = useHistory()
  const goHome = () =>{
    history.push("/")
  }
  return(
    <div className="search-bar-container">
      <img className="amazon-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" onClick={goHome} alt="Product"/>
      <div className="input-container">
        <input className="search-input" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="search-bar-button-container">
        <span className="normal-span">Hello Guest</span>
        <span className="bold-span">Sign In</span>
      </div>
      <div className="search-bar-button-container">
        <span className="normal-span">Returns</span>
        <span className="bold-span">& Orders</span>
      </div>
      <div className="search-bar-button-container">
        <span className="normal-span">Your</span>
        <span className="bold-span">Prime</span>
      </div>
      <div className="search-bar-shopping-basket">
        <ShoppingBasketIcon style={{fontSize: 30}} className="basket-icon" />
        <span className="bold-span">{0}</span>
      </div>
    </div>
  )
}