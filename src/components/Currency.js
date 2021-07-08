import React from "react";
import { useDispatch } from "react-redux";
import CurrencyActions from "../store/actions/CurrencyActions";
function Currency() {
  const codes = ["INR", "USD", "EUR", "CAD", "GBP"];
  const dispatch=useDispatch();
  return (
    <select className="form-control" onChange={e => dispatch(CurrencyActions.updateCurrency(e.target.value))}>
      {
        codes.map((c)=><option key={c} value={c}>{c}</option>)
      }
    </select>
  );
}
export default Currency;
