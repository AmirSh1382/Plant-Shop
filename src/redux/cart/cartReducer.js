// Functions
import { increaseProductQuantity } from "../../helper/functions";
import { decreaseProductQuantity } from "../../helper/functions";
import { removeProduct } from "../../helper/functions";
import { addProduct } from "../../helper/functions";
import { getCartStateFromLocalStorgae } from "../../helper/functions";

const initialState = {
  products: [],
  itemsCounter : 0,
  total: 0,
  checkout: false
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_LOCAL_CART_INFO":
      return {
        ...getCartStateFromLocalStorgae(state)
      }

    case "ADD_PRODUCT":
      return {
        ...addProduct(state, payload),
      };

    case "INCREASE":
      return {
        ...increaseProductQuantity(state, payload),
      };

    case "DECREASE":
      return {
        ...decreaseProductQuantity(state, payload),
      };

    case "REMOVE":
      return {
        ...removeProduct(state, payload),
      };

    default:
      return state;
  }
};

export default cartReducer;