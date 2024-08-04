import { useLocation } from 'react-router-dom'
import productsServices from '../services/productsServices'

export function useGetPageData () {
  let { state } = useLocation()
  const pathname = useLocation().pathname.split('/')
  if (!state) {
    if (pathname[2] === 'temporada') {
      state = { name: pathname[3] }
      state.section = productsServices.getCategoryByName(state.name).section
    } else {
      state.name = pathname[2]
      state.section = productsServices.getCategoryByName(state.name).section
    }
  }
  state.season = pathname[2] === 'temporada'
  console.log(state)

  return {
    name: state.name,
    section: state.section,
    season: state.season
  }
}
