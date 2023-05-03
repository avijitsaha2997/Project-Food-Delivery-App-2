export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") === "undefined"
      ? localStorage.clear()
      : JSON.parse(localStorage.getItem("user"));

  return userInfo;
};
export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
