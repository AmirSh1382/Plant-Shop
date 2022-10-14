// Redux
import { combineReducers } from "redux";

// Reducers
import userReducer from "./user/userReducer";
import themeReducer from "./theme/themeReducer";
import paginationReducer from "./pagination/paginationReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  themeState: themeReducer,
  paginationState: paginationReducer,
  cartState: cartReducer,
});

export default rootReducer;