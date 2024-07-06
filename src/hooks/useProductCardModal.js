import { useState } from 'react'

export function useProductCardModal () {
  const [showProductModalCard, setShowProductModalCard] = useState(false)
  const [productModalCardInfo, setProductModalCardInfo] = useState()

  const openShowProductModalCard = (productInfo) => {
    setProductModalCardInfo(productInfo)
    setShowProductModalCard(true)
  }
  const closeProductModalCard = () => {
    setProductModalCardInfo()
    setShowProductModalCard(false)
  }
  return {
    showProductModalCard,
    productModalCardInfo,
    openShowProductModalCard,
    closeProductModalCard
  }
}
