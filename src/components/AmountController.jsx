import './amountController.css'
import { MinusCircleIcon, PlusCircleIcon } from './icons'

export default function AmountController ({ product, amountProduct, handleCheckAmount, addAmount, subtractAmount }) {
  return (
    <div className='amount-controller'>
      <span onClick={product ? () => subtractAmount({ ...product, amount: 1 }) : subtractAmount}>
        <MinusCircleIcon />
      </span>
      <input
        type='text'
        value={amountProduct}
        onChange={handleCheckAmount || (() => {})}
      />
      <span onClick={product ? () => addAmount({ ...product, amount: 1 }) : addAmount}>
        <PlusCircleIcon />
      </span>
    </div>
  )
}
