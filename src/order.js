import React from "react";
import "./order.css";
import moment from "moment";
import CheckoutProduct from "../checkoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({order}){
return(
<div className="order">
<h2>Order</h2>
<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
<p className="order-id">
<small>{order.id}</small>
</p>
{order.data.basket?.map(item =>(
<CheckoutProduct
 id={item.id}
 title={item.title}
price={item.price}
image={item.image}
raiting={item.raiting}

/>
))}
<CurrencyFormat
renderText={(value)=>(
  <h3 className="order_total">Order Total: {value}</h3>
)}
decimalScale={2}
value={order.data.amount/100}
displayTipe={"text"}
thausandSeparator={true}
prefix={"$"}
/>
</div>
);
}
export default Order;