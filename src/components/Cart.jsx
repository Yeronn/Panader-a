import './cart.css'
import ProductCardInCart from './ProductCardInCart'
import { useCart } from '../hooks/useCart'
import { useEffect, useState } from 'react'
import productsServices from '../services/productsServices'
import { useNavigate } from 'react-router-dom'

export default function Cart ({ hanldeShowCart }) {
  const { cart, clearCart, removeProducts } = useCart()
  const [totalCart, setTotalCart] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    let total = 0
    cart.forEach(({ amountInCart, price }) => {
      total = total + amountInCart * price
    })
    setTotalCart(total)
  }, [cart])

  const buyProducts = () => {
    if (cart.length <= 0) {
      console.log('No puede comprar nada porque el carrito se encuentra vacio')
      return
    }
    cart.forEach(item => {
      const { amountInCart, ...productBeingPurchased } = item
      productBeingPurchased.sold = productBeingPurchased.sold + amountInCart
      productsServices.updateProduct(productBeingPurchased)
    })
    removeProducts()
    hanldeShowCart(false)
    navigate('/productos/comprados')
  }
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
      <button onClick={buyProducts}>Comprar</button>
    </div>
  )
}
