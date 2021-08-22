import React from "react";
import "../product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../stateProvider";

function Product({ id, title, image, price, raiting }) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        raiting: raiting
      }
    })
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_raiting">
          {Array(raiting)
            .fill()
            .map((_, i) => (
              <p className="star">
                <StarRateIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="book" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
