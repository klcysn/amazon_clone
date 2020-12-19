import {useContext} from "react"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./SearchBar.scss"
import {AuthContext} from "../AuthContext/AuthProvider"
import {Link} from "react-router-dom"

export default function SearchBar(){
  const {basket} = useContext(AuthContext)

  return(
    <div className="search-bar-container">
      <Link className="link" to="/">
        <img className="amazon-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Product"/>
      </Link>
      <div className="input-container">
        <input className="search-input" />
        <SearchIcon className="search-icon" />
      </div>
      <Link className="link" to="/signin">
        <div className="search-bar-button-container">
          <span className="normal-span">Hello Guest</span>
          <span className="bold-span">Sign In</span>
        </div>
      </Link>
      <div className="search-bar-button-container">
        <span className="normal-span">Returns</span>
        <span className="bold-span">& Orders</span>
      </div>
      <div className="search-bar-button-container">
        <span className="normal-span">Your</span>
        <span className="bold-span">Prime</span>
      </div>
      <Link className="link" to="/basket">
        <div className="search-bar-shopping-basket">
          <ShoppingBasketIcon style={{fontSize: 30}} className="basket-icon" />
          <span className="bold-span">{basket.length}</span>
        </div>
      </Link>
    </div>
  )
}