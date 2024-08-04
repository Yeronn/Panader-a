import './amountController.css'
import { MinusCircleIcon, PlusCircleIcon } from './icons'

export default function AmountController ({ amountProduct, handleCheckAmount, addAmount, subtractAmount }) {
  return (
    <div className='amount-controller'>
      <span onClick={subtractAmount}>
        <MinusCircleIcon />
      </span>
      <input type='text' value={amountProduct} onChange={handleCheckAmount} />
      <span onClick={addAmount}>
        <PlusCircleIcon />
      </span>
    </div>
  )
}
