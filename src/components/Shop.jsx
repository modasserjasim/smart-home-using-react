import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { CartContext, ProductsContext } from '../layouts/Main';
import { addToDb } from '../utils/fakeDB';
import Product from './Product';

const Shop = () => {
  const products = useContext(ProductsContext);

  // load using direct
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  const handleAddToCart = newProduct => {
    let newCart = [];

    const exists = cart.find(product => product.id === newProduct.id);
    // console.log(exists.quantity);
    if (!exists) {
      newProduct.quantity = 1;
      newCart = [...cart, newProduct];
    } else {
      const rest = cart.filter(product => product.id !== newProduct.id)
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(newProduct.id)
    toast.success(`${newProduct.name} added to cart`, { autoClose: 500 });
  }
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
    </div>
  )
}

export default Shop
