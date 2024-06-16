import { useLocation } from 'react-router-dom'
import productsServices from '../services/productsServices'

export function useGetPageData () {
  let { state } = useLocation()
  if (!state) {
    const pathname = useLocation().pathname.split('/')
    state = { name: pathname[2] }
    state.section = productsServices.getCategoryByName(state.name).section
  }
  return {
    name: state.name,
    section: state.section
  }
}
