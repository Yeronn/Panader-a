import { useState } from 'react'
import './cart.css'
import ProductCardInCart from './ProductCardInCart'
export default function Cart ({ products }) {
  const [productsInCart, setProductsInCart] = useState(products)
  const deleteProductInCart = (idProductToDelete) => {
    setProductsInCart([...productsInCart.filter(product => product.id !== idProductToDelete)])
  }
  return (
    <div className='cart'>
      <h3>Carrito</h3>
      <ul className='cart-items-list'>
        {
        productsInCart.map((product) => (
          <li key={product.id}>
            <ProductCardInCart product={product} deleteProduct={deleteProductInCart} />
          </li>
        ))
        }
      </ul>
      <button>Comprar</button>
    </div>
  )
}
