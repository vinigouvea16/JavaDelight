import type { CartContextProps } from 'contexts/CartContext'
import { useCart as useCartHook } from 'contexts/CartContext'

export const useCart: () => CartContextProps = useCartHook
