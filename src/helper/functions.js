// To set initial configs of pagination
const setPaginationConfigs = (state, products) => {
  const { itemsPerPage, currentPage } = state;

  state.allProducts = products;

  const startIndex = currentPage * itemsPerPage - itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // First page products
  state.paginatedProducts = products.slice(startIndex, endIndex);

  state.pagesCount = Math.ceil(products.length / itemsPerPage);

  state.paginationBtns = [];
  for (let i = 1; i <= state.pagesCount; i++) {
    state.paginationBtns.push(i);
  }

  return { ...state };
};

// To set new page configs
const setNewPageConfigs = (state, mainPage) => {
  const { itemsPerPage } = state;

  state.currentPage = mainPage;

  const startIndex = mainPage * itemsPerPage - itemsPerPage;
  const endIndex = mainPage * itemsPerPage;

  state.paginatedProducts = state.allProducts.slice(startIndex, endIndex);

  return { ...state };
};

// To set cart state in to local storage
const setCartStateInToLocalStorage = state => {
  localStorage.setItem("cart", JSON.stringify(state));
};

// To get cart state info form local storage if it exists
const getCartStateFromLocalStorgae = state => {
  const localState = JSON.parse(localStorage.getItem("cart"));

  return localState ? localState : state;
};

// To check the either the product exists in cart or not
const isInCart = (cartProducts, mainProductId) => {
  return cartProducts.find(product => product.id === mainProductId)
    ? true
    : false;
};

// To return product quantity
const productQuantityCount = (cartProducts, mainProductId) => {
  const mainProduct = cartProducts.find(product => product.id === mainProductId);

  return mainProduct.quantity;
};

// To add a new product to cart state
const addProduct = (state, payload) => {
  const newProduct = { ...payload, quantity: 1 };

  state.products = [...state.products, newProduct];

  state.itemsCounter = state.products.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  state.total = state.products.reduce((price, item) => {
    return price + item.quantity * item.price;
  }, 0);

  state.checkout = false;

  setCartStateInToLocalStorage(state);

  return { ...state };
};

// To increase a product quantity based on its ID
const increaseProductQuantity = (state, mainProductId) => {
  state.products = state.products.map(product => {
    if (product.id === mainProductId) {
      product.quantity++;
    }

    return product;
  });

  state.itemsCounter = state.products.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  state.total = state.products.reduce((price, item) => {
    return price + item.quantity * item.price;
  }, 0);

  setCartStateInToLocalStorage(state);

  return { ...state };
};

// To decrease a product quantity based on its ID
const decreaseProductQuantity = (state, mainProductId) => {
  state.products = state.products.map(product => {
    if (product.id === mainProductId) {
      product.quantity--;
    }

    return product;
  });

  state.itemsCounter = state.products.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  state.total = state.products.reduce((price, item) => {
    return price + item.quantity * item.price;
  }, 0);

  setCartStateInToLocalStorage(state);

  return { ...state };
};

// To remove a product from cart state
const removeProduct = (state, mainProductId) => {
  state.products = state.products.filter(product => product.id !== mainProductId);

  state.itemsCounter = state.products.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  state.total = state.products.reduce((price, item) => {
    return price + item.quantity * item.price;
  }, 0);

  setCartStateInToLocalStorage(state);

  return { ...state };
};

// To clear cart state
const clearCart = () => {
  const state = {
    products: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
  };

  setCartStateInToLocalStorage(state);

  return { ...state };
};

// To set the state's checkout value to "true"
const checkOut = () => {
  const state = {
    products: [],
    itemsCounter: 0,
    total: 0,
    checkout: true,
  };

  setCartStateInToLocalStorage(state);

  return { ...state };
};

const getLocalThemeInfo = () => {
  const darkMode = JSON.parse(localStorage.getItem("theme"))

  return darkMode ? true : false
}

const setNewThemeIntoLocalStorage = newTheme => {
  localStorage.setItem("theme", JSON.stringify(newTheme))
}

export { setPaginationConfigs, setNewPageConfigs,getCartStateFromLocalStorgae };
export { isInCart, productQuantityCount, addProduct, increaseProductQuantity };
export { decreaseProductQuantity, removeProduct, clearCart, checkOut };
export { getLocalThemeInfo, setNewThemeIntoLocalStorage }