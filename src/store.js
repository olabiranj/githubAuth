import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middleWare)
    : composeEnhancers(applyMiddleware(...middleWare));

const store = createStore(rootReducer, initialState, devTools);

export default store;
