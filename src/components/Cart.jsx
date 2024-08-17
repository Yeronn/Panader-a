import './cart.css'
import ProductCardInCart from './ProductCardInCart'
import { useCart } from '../hooks/useCart'
import { useEffect, useState } from 'react'

export default function Cart () {
  const { cart, clearCart } = useCart()
  const [totalCart, setTotalCart] = useState(0)
  useEffect(() => {
    let total = 0
    cart.forEach(({ amountInCart, price }) => {
      total = total + amountInCart * price
    })
    setTotalCart(total)
  }, [cart])
  return (
    <div className='cart'>
      <h2>Carrito</h2>
      <ul className='cart-items-list'>
        {
        cart.map((product) => (
          <li key={product.id}>
            <ProductCardInCart product={product} />
          </li>
        ))
        }
      </ul>
      <button onClick={() => clearCart()}>Vaciar carro</button>
      <h3 className='cart--total'>
        <span>Total</span>
        <span>{totalCart}</span>
      </h3>
      <button>Comprar</button>
    </div>
  )
}
