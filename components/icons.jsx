const MenuIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-menu-2' width='44' height='44' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 6l16 0' />
      <path d='M4 12l16 0' />
      <path d='M4 18l16 0' />
    </svg>
  )
}

const SearchIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-search' width='44' height='44' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
      <path d='M21 21l-6 -6' />
    </svg>
  )
}

const CartIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-shopping-cart' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l14 1l-1 7h-13' />
    </svg>
  )
}

const UserIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-user' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
      <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
    </svg>
  )
}

export { MenuIcon, SearchIcon, CartIcon, UserIcon }
