import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import CartActions from "../store/actions/CartActions";
function Cart(props) {
  const cart = useSelector((storeData) => storeData.cart);//useStore().getState(); // gets the entire store data useStore gets the data one time, useSelector is used for getting updated data
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.productId} onClick={() => dispatch(CartActions.removeItem(item.productId))}>
            {item.productId}-{item.productName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
