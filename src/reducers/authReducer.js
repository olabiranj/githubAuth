const initialState = {
  isLoggedIn: false,
  user: null,
  client_id: "4e66601162a5193b15b9",
  redirect_uri: "http://localhost:3000",
  client_secret: "c3aafb30cf0fdaa3cafbf12a4813e5b787a7e96d",
  proxy_url: "http://localhost:5000/authenticate",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
        user: JSON.parse(localStorage.getItem("user")),
      };
    }
    case "LOGOUT": {
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default:
      return state;
  }
}
