// import { useProductCard } from '../hooks/useProductCard'
import AmountController from './AmountController'

export default function ProductCardInCart ({ product, deleteProduct, addToCart, reduceQuantity }) {
  const { id, name, price, stock, description, imgURL, amountInCart } = product
  // const { handleCheckAmount } = useProductCard({ price, stock, initialAmountProduct: amountInCart })
  // const { amountProduct, totalProduct, addAmount, handleCheckAmount, subtractAmount } = useProductCard({ price, stock })
  return (
    <article className='cart-item'>
      <img src={imgURL} alt='' className='cart-item--img' />
      <div className='cart-item--content'>
        <h3 className='cart-item--name'>{name}</h3>
        <p className='cart-item--stock'>Disponible: <span className='cart-item--stock-value'>{stock}</span></p>
        <p className='cart-item--description'>{description}</p>
        <AmountController product={product} amountProduct={amountInCart} addAmount={addToCart} subtractAmount={reduceQuantity} />
        <p className='cart-item--total'>Total: $ {amountInCart * price}</p>
      </div>
      {(amountInCart <= 0) &&
        <div className='cart-item--delete'>
          <p>¿Desea eliminar el producto?</p>
          <div>
            <button onClick={() => { deleteProduct(id) }}>Si</button>
            <button onClick={() => addToCart({ ...product, amountInCart: 1 })}>No</button>
          </div>
        </div>}
    </article>
  )
}
