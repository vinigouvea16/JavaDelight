import { ReactNode, createContext, useContext, useState } from 'react'

interface Product {
  imageUrl: string
  productName: string
  productTag: string
  cashValue: string
  quantity: number
}

interface CartContextProps {
  cart: Product[]
  addToCart: (product: Product) => void
  updateCartItemQuantity: (updatedCart: Product[]) => void
  removeFromCart: (index: number) => void
  selectedPaymentType: string | null
  setPaymentType: (paymentType: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([])
  const [selectedPaymentType, setSelectedPaymentType] = useState<string | null>(
    null,
  )

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.productName === product.productName,
    )

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingProductIndex].quantity += product.quantity
      setCart(updatedCart)
    } else {
      setCart([...cart, product])
    }
  }

  const updateCartItemQuantity = (updatedCart: Product[]) => {
    setCart(updatedCart)
  }

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    setCart(updatedCart)
  }

  const setPaymentType = (paymentType: string) => {
    setSelectedPaymentType(paymentType)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        selectedPaymentType,
        setPaymentType,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}