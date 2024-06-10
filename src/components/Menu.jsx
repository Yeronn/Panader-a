import { NavLink } from 'react-router-dom'
import { XcircleIcon } from './icons'
import './menu.css'
export default function Menu ({ hanldeShowMenu }) {
  const typeOfProducts = [
    { id: 1, section: 'all', name: 'Todo', season: false },
    { id: 2, section: 'bread', name: 'Panes', season: false },
    { id: 3, section: 'dessert', name: 'Postres', season: false },
    { id: 4, section: 'cream', name: 'Cremas', season: false },
    { id: 5, section: 'cake', name: 'Tortas', season: false },
    { id: 6, section: 'christmas', name: 'Navidad', season: true },
    { id: 7, section: 'halloween', name: 'Halloween', season: true }
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
          {
            typeOfProducts.map(typeProduct =>
              !typeProduct.season && (
                <li key={typeProduct.id} onClick={() => hanldeShowMenu()}>
                  <NavLink to={`/productos/${typeProduct.name}`} state={{ sectionName: typeProduct.section }}>{typeProduct.name}</NavLink>
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
                  <NavLink to={`/productos/${typeProduct.name}`} state={{ sectionName: typeProduct.section }}>{typeProduct.name}</NavLink>
                </li>
              ))
          }
        </ul>
      </div>
    </section>
  )
}
