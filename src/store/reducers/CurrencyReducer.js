import CurrencyActions from "../actions/CurrencyActions";
export default function currencyReducer(storeData='INR',action){
  switch(action.type){
    case CurrencyActions.actionTypes.CHANGE_CURRENCY:
      return action.code;
    default:
      return storeData;
  }
}