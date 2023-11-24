// eslint-disable-next-line
// @ts-ignore
import {
  Cardholder,
  CreditCard,
  CurrencyCircleDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  X,
} from '@phosphor-icons/react'
import { Footer } from 'components/Footer'
import { useCart } from 'contexts/CartContext'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  CheckOutAddressCard,
  CheckOutCard,
  CheckOutContainer,
  CheckOutHeroContainer,
} from './styles'
// import { useForm } from 'react-hook-form'
export function Checkout() {
  const { cart, updateCartItemQuantity, setPaymentType, removeFromCart } =
    useCart()
  const [totalValue, setTotalValue] = useState<number>(0)
  const deliveryFee: number = 70
  useEffect(() => {
    const itemsTotal = cart.reduce(
      (sum, product) => sum + product.quantity * Number(product.cashValue),
      0,
    )
    setTotalValue(itemsTotal)
  }, [cart])

  const handleIncrement = (index: number) => {
    const updatedCart = [...cart]
    updatedCart[index].quantity += 1
    updateCartItemQuantity(updatedCart)
  }

  const handleDecrement = (index: number) => {
    if (cart[index].quantity > 1) {
      const updatedCart = [...cart]
      updatedCart[index].quantity -= 1
      updateCartItemQuantity(updatedCart)
    }
  }
  const handleDelete = (index: number) => {
    removeFromCart(index)
  }
  const handlePaymentTypeSelect = (paymentType: string) => {
    setPaymentType(paymentType)
  }
  return (
    <CheckOutContainer>
      <CheckOutHeroContainer>
        <CheckOutAddressCard>
          <h1>注文を完了します</h1>
          <form>
            <header>
              <MapPin size={38} color="#4B2995" weight="fill" />
              <div className="header-card-text">
                <strong>配送先住所</strong>
                <p>注文品を受け取りたい住所を入力してください</p>
              </div>
            </header>
            <input type="text" name="CEP" id="CEP" placeholder="〒" />
            <input type="text" name="address" id="address" placeholder="住所" />
            <div className="input-div">
              <input type="text" id="number" placeholder="番地" />
              <input type="text" id="complemento" placeholder=" 補足住所 " />
              <input type="text" id="UF" placeholder="都道府県" />
              <input type="text" id="bairro" placeholder="区" />
              <input type="text" id="cidade" placeholder="市" />
            </div>
          </form>

          <div className="payment-div">
            <header>
              <CurrencyCircleDollar size={38} color="#4B2995" weight="fill" />
              <div className="payment-div-header">
                <h3>注文品を受け取りたい住所を入力してください</h3>
                <p>
                  お支払いは配達時に行われます。支払い方法を選択してください
                </p>
              </div>
            </header>
            <div className="payment-options">
              <button
                onClick={() =>
                  handlePaymentTypeSelect('Debit Card / クレジット')
                }
              >
                <Cardholder size={32} color="#4B2995" weight="light" />
                クレジット
              </button>
              <button
                onClick={() =>
                  handlePaymentTypeSelect('Credit Card / デビット')
                }
              >
                <CreditCard size={32} color="#4B2995" weight="light" />
                デビット
              </button>
              <button onClick={() => handlePaymentTypeSelect('Cash / 現金')}>
                <Money size={32} color="#4B2995" weight="light" />
                現金
              </button>
            </div>
          </div>
        </CheckOutAddressCard>
        <CheckOutCard>
          <h2>選択されたアイテム</h2>
          <div className="card">
            {cart.map((product, index) => (
              <div className="selected-items" key={index}>
                <img src={product.imageUrl} alt="" />
                <div className="div">
                  <div className="div-header">
                    <h3>{product.productName}</h3>
                    <button id="x" onClick={() => handleDelete(index)}>
                      <X size={20} color="#111" weight="bold" />
                    </button>
                  </div>
                  <div className="div-body">
                    <div className="arrows">
                      <button id="minus" onClick={() => handleDecrement(index)}>
                        <Minus size={16} color="#111" weight="bold" />
                      </button>
                      <span>{product.quantity}</span>
                      <button id="plus" onClick={() => handleIncrement(index)}>
                        <Plus size={16} color="#111" weight="bold" />
                      </button>
                    </div>

                    <h4>{product.cashValue}</h4>
                  </div>
                </div>
              </div>
            ))}
            <div className="div-total">
              <div className="itens-total">
                <h3>価値観</h3>
                <p>¥ {totalValue}</p>
              </div>
              <div className="entrega">
                <h3>貨物</h3>
                <p>¥{deliveryFee}</p>
              </div>
              <div className="total">
                <h2>合計</h2>
                <h2>¥ {totalValue + deliveryFee}</h2>
              </div>
            </div>
            <NavLink to="/success">
              <button id="total">注文を確認する</button>
            </NavLink>
          </div>
        </CheckOutCard>
      </CheckOutHeroContainer>
      <Footer />
    </CheckOutContainer>
  )
}
