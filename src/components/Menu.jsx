import { NavLink } from 'react-router-dom'
import { XcircleIcon } from './icons'
import productsServices from '../services/productsServices'
import './menu.css'
export default function Menu ({ hanldeShowMenu }) {
  const categories = productsServices.getCategories()
  return (
    <section className='menu'>
      <div className='menu-content'>
        <div>
          <span onClick={() => hanldeShowMenu(true)}>
            <XcircleIcon />
          </span>
        </div>
        <ul>
          {
            categories.map(typeProduct =>
              !typeProduct.season && (
                <li key={typeProduct.id} onClick={() => hanldeShowMenu()}>
                  <NavLink to={`/productos/${typeProduct.name}`} state={{ name: typeProduct.name, section: typeProduct.section }}>{typeProduct.name}</NavLink>
                </li>
              ))
          }
        </ul>
        <p>Temporada</p>
        <ul>
          {
            categories.map(typeProduct =>
              typeProduct.season && (
                <li key={typeProduct.id} onClick={() => hanldeShowMenu()}>
                  <NavLink to={`/productos/${typeProduct.name}`} state={{ name: typeProduct.name, section: typeProduct.section }}>{typeProduct.name}</NavLink>
                </li>
              ))
          }
        </ul>
      </div>
    </section>
  )
}
