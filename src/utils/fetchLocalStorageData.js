export const fetchUser = () => {
    const userInfo = localStorage.getItem("user") === "undefined" ? localStorage.clear() : JSON.parse(localStorage.getItem("user"));

    return userInfo;
}