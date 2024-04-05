import './cart.css'
import ProductCardInCart from './ProductCardInCart'
export default function Cart ({ products }) {
  return (
    <div className='cart'>
      <h3>Carrito</h3>
      <ul className='cart-items-list'>
        {
        products.map((product) => (
          <li key={product.id}>
            <ProductCardInCart product={product} />
          </li>
        ))
        }
      </ul>
      <button>Comprar</button>
    </div>
  )
}
