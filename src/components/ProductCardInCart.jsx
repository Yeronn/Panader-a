import { useProductCard } from '../hooks/useProductCard'
import AmountController from './AmountController'

export default function ProductCardInCart ({ product, deleteProduct, addToCart, reduceQuantity }) {
  const { id, name, price, stock, description, imgURL } = product
  const { amountProduct, totalProduct, addAmount, handleCheckAmount, subtractAmount } = useProductCard({ price, stock })
  return (
    <article className='cart-item'>
      <img src={imgURL} alt='' className='cart-item--img' />
      <div className='cart-item--content'>
        <h3 className='cart-item--name'>{name}</h3>
        <p className='cart-item--stock'>Stock: <span className='cart-item--stock-value'>{stock}</span></p>
        <p className='cart-item--description'>{description}</p>
        <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
        <p className='cart-item--total'>Total: $ {totalProduct}</p>
      </div>
      {(amountProduct <= 0) &&
        <div className='cart-item--delete'>
          <p>¿Desea eliminar el producto?</p>
          <div>
            <button onClick={() => { deleteProduct(id) }}>Si</button>
            <button onClick={addAmount}>No</button>
          </div>
        </div>}
    </article>
  )
}
