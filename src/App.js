import React from "react";

// Componetns
import Layout from "./components/layout/Layout";
import Store from "./components/store/Store"
import Cart from "./components/cart/Cart";
import About from "./components/about/About";
import Form from "./components/form/Form";
import ProductDetail from "./components/store/ProductDetail";
import NotFound from "./components/not-found/NotFound";

// React-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/store/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/" element={<Navigate to="/store" />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Provider>
    </div>
  );
};

export default App;