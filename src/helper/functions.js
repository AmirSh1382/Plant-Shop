const setPaginationConfigs = (state, products) => {
    const { itemsPerPage, currentPage } = state

    state.allProducts = products

    const startIndex = (currentPage * itemsPerPage) - itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    // First page products
    state.paginatedProducts = products.slice(startIndex, endIndex)

    state.pagesCount = Math.ceil(products.length / itemsPerPage)

    state.paginationBtns = []
    for(let i = 1; i <= state.pagesCount; i++) {
        state.paginationBtns.push(i)
    }

    return { ...state }
}

const setNewPageConfigs = (state, mainPage) => {
    const { itemsPerPage } = state

    state.currentPage = mainPage

    const startIndex = (mainPage * itemsPerPage) - itemsPerPage;
    const endIndex = mainPage * itemsPerPage;

    state.paginatedProducts = state.allProducts.slice(startIndex, endIndex)

    return { ...state }
}

const setCartStateInToLocalStorage = state => {
    localStorage.setItem("cart", JSON.stringify(state))
}

const getCartStateFromLocalStorgae = state => {
    const localState = JSON.parse(localStorage.getItem("cart"))

    return localState ? localState : state
}

const isInCart = (cartProducts, mainProductId) => {
    return cartProducts.find(product => product.id === mainProductId) ? true : false
}

const productQuantityCount = (cartProducts, mainProductId) => {
    const mainProduct = cartProducts.find(product => product.id === mainProductId)

    return mainProduct.quantity
}

const addProduct = (state, payload) => {
    const newProduct = {...payload, quantity: 1}

    state.products = [
        ...state.products,
        newProduct
    ]

    state.itemsCounter = state.products.reduce((count, item) => {
        return count + item.quantity
    }, 0)

    state.total = state.products.reduce((price, item) => {
        return price + item.quantity * item.price;
    }, 0)

    setCartStateInToLocalStorage(state)
    
    return { ...state }
}

const increaseProductQuantity = (state, mainProductId) => {
    state.products = state.products.map(product => {
        if (product.id === mainProductId) {
            product.quantity++
        }

        return product
    })

    state.itemsCounter = state.products.reduce((count, item) => {
        return count + item.quantity
    }, 0)

    state.total = state.products.reduce((price, item) => {
        return price + item.quantity * item.price;
    }, 0)

    setCartStateInToLocalStorage(state)

    return { ...state }
}

const decreaseProductQuantity = (state, mainProductId) => {
    state.products = state.products.map(product => {
        if (product.id === mainProductId) {
            product.quantity--
        }

        return product
    })

    state.itemsCounter = state.products.reduce((count, item) => {
        return count + item.quantity
    }, 0)

    state.total = state.products.reduce((price, item) => {
        return price + item.quantity * item.price;
    }, 0)

    setCartStateInToLocalStorage(state)

    return { ...state }
}

const removeProduct = (state, mainProductId) => {
    state.products = state.products.filter(product => {
        return product.id !== mainProductId
    })

    state.itemsCounter = state.products.reduce((count, item) => {
        return count + item.quantity
    }, 0)

    state.total = state.products.reduce((price, item) => {
        return price + item.quantity * item.price;
    }, 0)

    setCartStateInToLocalStorage(state)

    return { ...state }
}

const clearCart = () => {
    const state = {
        products: [],
        itemsCounter : 0,
        total: 0,
        checkout: false
    }

    setCartStateInToLocalStorage(state)

    return { ...state }
}

const checkOut = () => {
    const state = {
        products: [],
        itemsCounter : 0,
        total: 0,
        checkout: true
    }

    setCartStateInToLocalStorage(state)

    return { ...state }
}

export { setPaginationConfigs, isInCart, productQuantityCount }
export { increaseProductQuantity, decreaseProductQuantity }
export { getCartStateFromLocalStorgae, clearCart, checkOut }
export { removeProduct, addProduct, setNewPageConfigs }