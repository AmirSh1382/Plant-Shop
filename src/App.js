import React from 'react';

// Componetns
import Layout from './components/layout/Layout';
import Shop from "./components/shop/Shop"
import Cart from "./components/cart/Cart"
import About from "./components/about/About"
import Login from './components/login/Login';
import NotFound from './components/not-found/NotFound';

// React-router-dom
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <Layout>
        <Routes>
          <Route path='/shop' element={<Shop /> }/>
          <Route path='/cart' element={<Cart /> }/>
          <Route path='/about' element={<About /> }/>
          <Route path='login' element={<Login /> } />
          <Route path='/' element={<Navigate to="/shop" /> }/>
          <Route path='/*' element={<NotFound /> }/>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;