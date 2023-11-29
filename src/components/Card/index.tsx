import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { useCart } from '../../hooks/cartHooks'
import { CardContainer } from './styles'
interface Product {
  imageUrl: string
  productName: string
  productTag: string
  cashValue: string
  quantity: number
}
interface CardProps {
  imageUrl: string
  productName: string
  productTag: string
  cashValue: string
  onAddToCart: (product: Product) => void
}

export function Card({
  imageUrl,
  productName,
  productTag,
  cashValue,
}: CardProps) {
  const [quantity, setQuantity] = useState(1)
  const [totalValue, setTotalValue] = useState(Number(cashValue))
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const product = {
      imageUrl,
      productName,
      productTag,
      cashValue,
      quantity,
      totalValue: String(totalValue),
    }
    addToCart(product)
    setQuantity(0)
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
    setTotalValue((quantity + 1) * Number(cashValue))
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setTotalValue((quantity - 1) * Number(cashValue))
    }
  }

  return (
    <CardContainer>
      <img src={imageUrl} alt="" />
      <h2>{productName}</h2>
      <h5>{productTag}</h5>
      <h3>
        ¥ <span>{totalValue}</span>
      </h3>
      <div className="add-to-cart">
        <div className="arrows">
          <button onClick={handleDecrement}>
            <Minus size={20} color="#111" weight="light" />
          </button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>
            <Plus size={20} color="#111" weight="light" />
          </button>
        </div>
        <button onClick={handleAddToCart} className="card-cart">
          <ShoppingCartSimple
            className="icon"
            size={20}
            color="#FFF"
            weight="fill"
          />
        </button>
      </div>
    </CardContainer>
  )
}
