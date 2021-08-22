import React, { useState,useEffect } from "react";
import "./payment.css";
import { useStateValue } from "../stateProvider";
import CheckoutProduct from "../checkoutProduct";
import { Link,useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import axios from "./axios";
import {db} from "../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret,setClientSecret]= useState(true);
  const history = useHistory();

useEffect(() => {
const getClientSecret = async()=>{
const response = await axios({
metod:"post",
url: "/payments/create?total=${getBasketTotal(basket)* 100}"
});
setClientSecret(response.data.clientSecret)
}
getClientSecret();
},[basket])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

  const payload = await stripe.confirmCardPaymend(clientSecret,{
    payment_method:{
     card: elements.getElement(CardElement)
    }
  }).then(({paymentIndent}) => {

db
.collection("users")
.doc(user?.uid)
.collection("orders")
.doc(paymentIndent.id)
.set({
basket:basket,
amount:paymentIndent.amount,
created:paymentIndent.created
})

      setSucceeded(true);
         setError(null)
       setProcessing(false)

       dispatch({
        type:"EMPTY_BASKET"
       })

     history.replace("/orders")
  })
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout({<Link to="/checkout">{basket?.length} items</Link>})</h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>adresa </p>
            <p>zemlja </p>
          </div>
        </div>
        <div className="payment_section">
          <h3>Review items and delivery</h3>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                raiting={item.raiting}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_metod">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  value={getBasketTotal(basket)}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disable={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
