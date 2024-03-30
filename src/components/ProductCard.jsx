import { MinusCircleIcon, PlusCircleIcon } from './icons'
import { useProductCard } from '../hooks/useProductCard'

export default function ProductCard ({ product }) {
  const { name, price, stock, description, imgURL } = product
  const { amountProduct, totalProduct, handleCheckAmount, addAmount, subtractAmount } = useProductCard({ price, stock })
  return (
    <article className='cart-item'>
      <img src={imgURL} alt='' className='cart-item--img' />
      <div className='cart-item--content'>
        <h3 className='cart-item--name'>{name}</h3>
        <p className='cart-item--stock'>Stock: <span className='cart-item--stock-value'>{stock}</span></p>
        <p className='cart-item--description'>{description}</p>
        <div className='cart-item--amount'>
          <span onClick={subtractAmount}>
            <MinusCircleIcon />
          </span>
          <input type='text' value={amountProduct} onChange={handleCheckAmount} />
          <span onClick={addAmount}>
            <PlusCircleIcon />
          </span>
        </div>
        <p className='cart-item--total'>Total: $ {totalProduct}</p>
      </div>
    </article>
  )
}
