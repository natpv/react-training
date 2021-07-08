const actionTypes = {
    ADD_TO_CART: "[Cart] Add Item",
    REMOVE_FROM_CART: "[Cart] Remove Item",
  };
  const addToCart = (product) => {
    return {
      type: actionTypes.ADD_TO_CART, // required
      product, // optional : payload
    };
  };
  const removeItem = (id) => {
    return {
      type: actionTypes.REMOVE_FROM_CART, // required
      id, // optional : payload
    };
  };
  const CartActions={addToCart,removeItem,actionTypes}
  export default CartActions;
  