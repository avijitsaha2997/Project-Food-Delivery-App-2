const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_FOOD_ITEMS":
      return {
        ...state,
        foodItems: action.foodItems,
      };
    case "SET_CART_SHOW":
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case "SET_CARTITEMS":
      return {
        ...state,
        cartItems: action.cartItems,
      };
    default:
      return state;
  }
};
export default reducer;
