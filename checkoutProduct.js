import React from "react";
import { useStateValue } from "../stateProvider";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./checkoutProduct.css";

function CheckoutProduct({ id, title, image, price, raiting }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,

    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_raiting">
          {Array(raiting)
            .fill()
            .map((_, i) => (
              <p className="star">
                <StarRateIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
