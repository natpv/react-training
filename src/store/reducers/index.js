import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import currencyReducer from "./CurrencyReducer";
const rootReducer = combineReducers({
  // data : reducer
  cart: cartReducer,
  currency: currencyReducer,
});
export default rootReducer;