const getLocalCartInfo = () => {
  return { type: "GET_LOCAL_CART_INFO" };
};

const addProduct = (productInfo) => {
  console.log(productInfo);
  return { type: "ADD_PRODUCT", payload: productInfo };
};

const removeProduct = productId => {
  return { type: "REMOVE_PRODUCT", payload: productId };
};

const increaseQuantity = productId => {
  return { type: "INCREASE_QUANTITY", payload: productId };
};

const decreaseQuantity = productId => {
  return { type: "DECREASE_QUANTITY", payload: productId };
};

const clearCart = () => {
  return { type: "CLEAR_CART" };
};

const checkoutAction = () => {
  return { type: "CHECKOUT" };
};

export { getLocalCartInfo, addProduct, removeProduct, increaseQuantity };
export { decreaseQuantity, clearCart, checkoutAction };