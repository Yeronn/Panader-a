import { NavLink } from 'react-router-dom'
import { XcircleIcon } from './icons'
import './menu.css'
export default function Menu ({ hanldeShowMenu }) {
  const typeOfProducts = [
    { id: 1, name: 'Panes', season: false },
    { id: 2, name: 'Postres', season: false },
    { id: 3, name: 'Cremas', season: false },
    { id: 4, name: 'Tortas', season: false },
    { id: 5, name: 'Navidad', season: true },
    { id: 6, name: 'Halloween', season: true }
  ]
  return (
    <section className='menu'>
      <div className='menu-content'>
        <div>
          <span onClick={() => hanldeShowMenu(true)}>
            <XcircleIcon />
          </span>
        </div>
        <ul>
          <li onClick={() => hanldeShowMenu()}>
            <NavLink to='/Products' end>Todo</NavLink>
          </li>
          {
            typeOfProducts.map(typeProduct =>
              !typeProduct.season && (
                <li key={typeProduct.id} onClick={() => hanldeShowMenu()}>
                  <NavLink to={`/Products/${typeProduct.name}`}>{typeProduct.name}</NavLink>
                </li>
              ))
          }
        </ul>
        <p>Temporada</p>
        <ul>
          {
            typeOfProducts.map(typeProduct =>
              typeProduct.season && (
                <li key={typeProduct.id} onClick={() => hanldeShowMenu()}>
                  <NavLink to={`/Products/${typeProduct.name}`}>{typeProduct.name}</NavLink>
                </li>
              ))
          }
        </ul>
      </div>
    </section>
  )
}
