import { CartIcon, HeaderWave, MenuIcon } from './icons'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header ({ hanldeShowMenu, hanldeShowCart }) {
  return (
    <header className='header'>
      <section className='header-content'>
        <ul className='navbar'>
          <li onClick={hanldeShowMenu}><MenuIcon /></li>
          {/* <li><SearchIcon /></li> */}
          <li className='logo-container'>
            <Link to='/'>
              <img className='logo' src='/logoPanaderia.png' alt='Logo de la panadería' />
            </Link>
          </li>
          {/* <li><UserIcon /></li> */}
          {/* <li onClick={hanldeShowCart}><CartIcon /></li> */}
          <li>
            <Link to='/cart'><CartIcon /></Link>
          </li>
        </ul>
      </section>
      <HeaderWave />
    </header>
  )
}
