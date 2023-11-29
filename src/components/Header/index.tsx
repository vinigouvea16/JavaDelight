import { Coffee, ShoppingCartSimple } from '@phosphor-icons/react'
import { useCart } from 'hooks/cartHooks'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  const { cart } = useCart()
  const totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <Coffee className="icon" size={48} color="#272221" weight="fill" />
      </NavLink>
      <h1>ジャワディライト</h1>
      <div className="cart-div">
        <NavLink to="/Checkout">
          <ShoppingCartSimple
            className="icon"
            size={48}
            color="#000111"
            weight="bold"
          />
          {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
