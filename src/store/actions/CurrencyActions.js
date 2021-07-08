const actionTypes = {
    CHANGE_CURRENCY: "[Currency] Update Currency",
  };
  const updateCurrency = (code) => {
    return {
      type: actionTypes.CHANGE_CURRENCY,
      code,
    };
  };
  const CurrencyActions = { updateCurrency, actionTypes };
  export default CurrencyActions;