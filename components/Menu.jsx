import { XcircleIcon } from './icons'
import './menu.css'
export default function Menu ({ hanldeShowMenu }) {
  return (
    <section className='menu'>
      <div className='menu-content'>
        <div>
          <span onClick={hanldeShowMenu}>
            <XcircleIcon />
          </span>
        </div>
        <ul>
          <li><a href='#'>Panes</a></li>
          <li><a href='#'>Postres</a></li>
          <li><a href='#'>Cremas</a></li>
          <li><a href='#'>Tortas</a></li>
        </ul>
        <p>Temporada</p>
        <ul>
          <li><a href='#'>Navidad</a></li>
          <li><a href='#'>Halloween</a></li>
        </ul>
      </div>
    </section>
  )
}
