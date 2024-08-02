import './breadCatalog.css'
import { HeartIcon } from './icons'
import AmountController from './AmountController'
import { useProductCard } from '../hooks/useProductCard'

export default function BreadCatalog () {
  const { amountProduct, addAmount, handleCheckAmount, subtractAmount } = useProductCard({ price: 18, stock: 20 })

  return (
    <section className='bread-catalog'>
      <img src='https://images.pexels.com/photos/4397272/pexels-photo-4397272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen de un pan' />
      <h2>Elige tus favoritos</h2>
      <span> <HeartIcon /> </span>
      <div className='staggered-product-cards'>
        <article className='staggered-card'>
          <img src='https://images.pexels.com/photos/13019131/pexels-photo-13019131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          <div className='staggered-card--content'>
            <h3>Roscones</h3>
            <p>Descripcion</p>
            <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
            <button>Comprar</button>
          </div>
        </article>
      </div>
    </section>
  )
}
