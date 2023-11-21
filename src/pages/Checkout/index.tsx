// eslint-disable-next-line
// @ts-ignore
import coffee from '@/public/icons/autorais.png'
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
import { NavLink } from 'react-router-dom'
import {
  CheckOutAddressCard,
  CheckOutCard,
  CheckOutContainer,
  CheckOutHeroContainer,
} from './styles'

export function Checkout() {
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
            <div className="payment-buttons">
              <button>
                <Cardholder size={32} color="#4B2995" weight="light" />
                クレジット
              </button>
              <button>
                <CreditCard size={32} color="#4B2995" weight="light" />
                デビット
              </button>
              <button>
                <Money size={32} color="#4B2995" weight="light" />
                現金
              </button>
            </div>
          </div>
        </CheckOutAddressCard>
        <CheckOutCard>
          <h2>選択されたアイテム</h2>
          <div className="card">
            <div className="selected-items">
              <img src={coffee} alt="" />
              <div className="div">
                <div className="div-header">
                  <h3>エスプレッソ</h3>
                  <button id="x">
                    <X size={20} color="#111" weight="bold" />
                  </button>
                </div>
                <div className="div-body">
                  <div className="arrows">
                    <button id="minus">
                      <Minus size={16} color="#111" weight="bold" />
                    </button>
                    <span>1</span>
                    <button id="plus">
                      <Plus size={16} color="#111" weight="bold" />
                    </button>
                  </div>

                  <h4>¥ 2000</h4>
                </div>
              </div>
            </div>
            <div className="selected-items">
              <img src={coffee} alt="" />
              <div className="div">
                <div className="div-header">
                  <h3>エスプレッソ</h3>
                  <button id="x">
                    <X size={20} color="#111" weight="bold" />
                  </button>
                </div>
                <div className="div-body">
                  <div className="arrows">
                    <button id="minus">
                      <Minus size={16} color="#111" weight="bold" />
                    </button>
                    <span>1</span>
                    <button id="plus">
                      <Plus size={16} color="#111" weight="bold" />
                    </button>
                  </div>

                  <h4>¥ 2000</h4>
                </div>
              </div>
            </div>
            <div className="selected-items">
              <img src={coffee} alt="" />
              <div className="div">
                <div className="div-header">
                  <h3>エスプレッソ</h3>
                  <button id="x">
                    <X size={20} color="#111" weight="bold" />
                  </button>
                </div>
                <div className="div-body">
                  <div className="arrows">
                    <button id="minus">
                      <Minus size={16} color="#111" weight="bold" />
                    </button>
                    <span>1</span>
                    <button id="plus">
                      <Plus size={16} color="#111" weight="bold" />
                    </button>
                  </div>

                  <h4>¥ 2000</h4>
                </div>
              </div>
            </div>
            <div className="total">
              <h3>valores etc</h3>
              <h4>entrega</h4>
              <NavLink to="/success">
                <button id="total">注文を確認する</button>
              </NavLink>
            </div>
          </div>
        </CheckOutCard>
      </CheckOutHeroContainer>
      <Footer />
    </CheckOutContainer>
  )
}
