import './cart.css'
import ProductCard from './ProductCard'
export default function Cart ({ products }) {
  return (
    <div className='cart'>
      <h3>Carrito</h3>
      <ul className='cart-items-list'>
        {
        products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))
        }
      </ul>
      <button>Comprar</button>
    </div>
  )
}
