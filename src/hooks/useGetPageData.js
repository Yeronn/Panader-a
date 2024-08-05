import { useLocation } from 'react-router-dom'
import productsServices from '../services/productsServices'

export function useGetPageData () {
  let { state } = useLocation()
  const pathname = useLocation().pathname.split('/')
  const formattedPathname = pathname.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())

  if (!state) {
    if (formattedPathname[2] === 'Temporada') {
      state = { name: formattedPathname[3] }
      state.section = productsServices.getCategoryByName(state.name).section
    } else {
      state = { name: formattedPathname[2] }
      state.section = productsServices.getCategoryByName(state.name).section
    }
  }
  state.season = formattedPathname[2] === 'Temporada'

  return {
    name: state.name,
    section: state.section,
    season: state.season
  }
}
