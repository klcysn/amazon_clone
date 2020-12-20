import {useContext} from "react"
import StripeCheckout from 'react-stripe-checkout';
import {toast} from "react-toastify"
import "./StripeStyle.scss"
import {AuthContext} from "../AuthContext/AuthProvider"


export default function Stripe(){
    const { basket } = useContext(AuthContext)
    const totalPayment = () => {
        const sum = basket.map((item) => item.price)
        return sum.reduce((total, price) => total + price) * 100
    }
    return(
        <div className="stripe-container">
            <StripeCheckout
            name="Amazon" // the pop-in header title
            image="http://pngimg.com/uploads/amazon/amazon_PNG11.png" // the pop-in header image (default none)
            panelLabel="Pay" // prepended to the amount in the bottom pay button
            amount={totalPayment()} // cents
            currency="USD"
            stripeKey="pk_test_51HxtrOCemlouAhyduZTjb5MKHmJpeswaelirVGppASUt572ELvVH3WEb9C4poezGV0ZoIfpqKDl3F8WLiuxFmoZX00fRiZM5yH"
            token={()=>toast("OK")} // submit callback
            />
        </div>
    )
} 