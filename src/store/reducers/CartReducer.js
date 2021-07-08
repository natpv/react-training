import CartActions from "../actions/CartActions";
// reducer (store_data,action_info)
// state : initialized state, immutable
function cartReducer(storeData = [], action) {
  switch (action.type) {
    case CartActions.actionTypes.ADD_TO_CART:
      return [...storeData, action.product];
    case CartActions.actionTypes.REMOVE_FROM_CART:
      return storeData.filter((p) => p.productId !== action.id);
    default:
      return storeData; // current store data
  }
}
export default cartReducer;
