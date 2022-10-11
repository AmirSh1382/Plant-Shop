import React from 'react';

// Componetns
import Layout from './components/layout/Layout';
import Shop from "./components/shop/Shop"
import Cart from "./components/cart/Cart"
import About from "./components/about/About"
import Login from './components/login/Login';
import ProductDetail from './components/shop/ProductDetail';
import NotFound from './components/not-found/NotFound';

// React-router-dom
import { Routes, Route, Navigate } from 'react-router-dom';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path='/shop' element={<Shop /> }/>
            <Route path='/shop/:slug' element={<ProductDetail /> }/>
            <Route path='/cart' element={<Cart /> }/>
            <Route path='/about' element={<About /> }/>
            <Route path='login' element={<Login /> } />
            <Route path='/' element={<Navigate to="/shop" /> }/>
            <Route path='/*' element={<NotFound /> }/>
          </Routes>
        </Layout>
      </Provider>
    </div>
  );
};

export default App;