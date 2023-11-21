import { Coffee, ShoppingCartSimple } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
export function Header() {
  return (
    <>
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
            <span>3</span>
          </NavLink>
        </div>
      </HeaderContainer>
    </>
  )
}
