import { useState } from 'react'
import './cart.css'
export default function Cart () {
  const [amount, setAmount] = useState(0)

  const handleCheckAmount = (event) => {
    const inputAmount = event.target.value
    if (!isNaN(inputAmount) && Number.isInteger(Number(inputAmount)) && Number(inputAmount) <= 100000) {
      setAmount(inputAmount)
    } else {
      console.log('Debes ingresar una cantidad valida, entera y menor o igual al stock')
    }
  }
  const addAmount = () => {
    setAmount(amount + 1)
  }
  const subtractAmount = (event) => {
    const inputAmount = amount
    if (inputAmount === 0) return
    setAmount(inputAmount - 1)
  }
  return (
    <div className='cart'>
      <ul className='cart-items-list'>
        <li className='cart-item'>
          <img src='https://www.clara.es/medio/2018/12/13/postres-saludables-crema-vainilla-chocolate-sin-gluten-lactosa-huevo_4b8ca87e_1000x1000.jpg' alt='' className='cart-item--img' />
          <div className='cart-item--content'>
            <h3 className='cart-item--name'>title</h3>
            <p className='cart-item--price'>$ <span className='cart-item--price-value'>1000000</span></p>
            <p className='cart-item--description'>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</p>
            <div className='cart-item--amount'>
              <span onClick={subtractAmount}>-</span>
              <input type='text' value={amount} onChange={handleCheckAmount} />
              <span onClick={addAmount}>+</span>
            </div>
            <p className='cart-item--total'>Total: $</p>
          </div>
        </li>

        <li className='cart-item'>
          <img src='' alt='' className='cart-item--img' />
          <h3 className='cart-item--name'>title</h3>
          <p className='cart-item--price'>Precio</p>
          <p className='cart-item--description'>Descripcion</p>
          <div className='cart-item--amount'>
            <span>-</span>
            <input type='number' />
            <span>+</span>
          </div>
          <p className='cart-item--total'>Total</p>
        </li>
      </ul>
    </div>
  )
}
