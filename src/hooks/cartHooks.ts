import { CartContext, type CartContextProps } from 'contexts/CartContext'
import { useContext } from 'react'

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
