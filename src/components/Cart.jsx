import { useState } from 'react'
import './cart.css'
import ProductCardInCart from './ProductCardInCart'
import { useCart } from '../hooks/useCart'

export default function Cart ({ products }) {
  const { cart, clearCart, addToCart, reduceQuantity } = useCart()
  const [productsInCart, setProductsInCart] = useState(products)
  const deleteProductInCart = (idProductToDelete) => {
    setProductsInCart([...productsInCart.filter(product => product.id !== idProductToDelete)])
  }
  console.log(cart)

  return (
    <div className='cart'>
      <h3>Carrito</h3>
      <ul className='cart-items-list'>
        {
        cart.map((product) => (
          <li key={product.id}>
            <ProductCardInCart product={product} deleteProduct={deleteProductInCart} addToCart={addToCart} reduceQuantity={reduceQuantity} />
          </li>
        ))
        }
      </ul>
      <button>Comprar</button>
      <button onClick={() => clearCart()}>Vaciar carro</button>
    </div>
  )
}
