import React from "react";
import "./checkout.css";
import Subtotal from "../subtotal";
import CheckoutProduct from "./checkoutProduct";
import { useStateValue } from "./stateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://mk0meaningfullibmht6.kinstacdn.com/wp-content/uploads/2014/03/Books-banner-400x187.jpg.webp"
          alt="banner"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              raiting={item.raiting}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
