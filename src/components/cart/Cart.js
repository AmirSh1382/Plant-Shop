import React from 'react';

// Redux
import { useSelector } from 'react-redux'; 

const Cart = () => {

  const cartProcuts = useSelector(state => state.cartState.products);

  console.log(cartProcuts)

  return (
    <div className='max-w-6xl w-full mt-20 px-5 mx-auto'>
      Cart  
    </div>
  );
};

export default Cart;