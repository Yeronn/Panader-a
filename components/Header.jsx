import { CartIcon, HeaderWave, MenuIcon } from './icons'
import './header.css'
export default function Header ({ hanldeShowMenu, hanldeShowCart }) {
  return (
    <header className='header'>
      <section className='header-content'>
        <ul className='navbar'>
          <li onClick={hanldeShowMenu}><MenuIcon /></li>
          {/* <li><SearchIcon /></li> */}
          <li className='logo-container'><img className='logo' src='https://panaderiaartesano1990.com/wp-content/uploads/2023/02/Diseno-sin-titulo-PhotoRoom.png-PhotoRoom.png' alt='Logo de la panadería' /></li>
          {/* <li><UserIcon /></li> */}
          <li className='cart' onClick={hanldeShowCart}><CartIcon /></li>
        </ul>
      </section>
      <HeaderWave />
    </header>
  )
}
