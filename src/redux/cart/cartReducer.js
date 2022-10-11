// Functions
import { getCartStateFromLocalStorgae, addProduct, removeProduct } from "../../helper/functions";
import { increaseProductQuantity, decreaseProductQuantity } from "../../helper/functions";
import { clearCart, checkOut } from "../../helper/functions";

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
      
    case "REMOVE_PRODUCT":
      return {
        ...removeProduct(state, payload),
      };

    case "INCREASE_QUANTITY":
      return {
        ...increaseProductQuantity(state, payload),
      };

    case "DECREASE_QUANTITY":
      return {
        ...decreaseProductQuantity(state, payload),
      };

    case "CLEAR_CART":
      return {
        ...clearCart()
      }

    case "CHECKOUT":
      return {
        ...checkOut()
      }

    default:
      return state;
  }
};

export default cartReducer;