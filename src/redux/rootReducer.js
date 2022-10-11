// Redux
import { combineReducers } from "redux";

// Reducers
import paginationReducer from "./pagination/paginationReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  paginationState: paginationReducer,
  cartState: cartReducer,
});

export default rootReducer;