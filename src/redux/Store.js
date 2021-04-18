import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartProduct")
      ? JSON.parse(localStorage.getItem("cartProduct"))
      : [],
  },
  // authentication: {
  //   currentUser: null,
  //   token: "",
  //   error: "",
  //   loading: false,
  //   isAuthenticated: false,
  // },
};
const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

const StateProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StateProvider;
