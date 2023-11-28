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
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

import { useCart } from 'hooks/cartHooks'
import {
  CheckOutAddressCard,
  CheckOutCard,
  CheckOutContainer,
  CheckOutHeroContainer,
} from './styles'
interface FormData {
  CEP: string
  address: string
  number: string
  complemento: string
  UF: string
  bairro: string
  cidade: string
}
export function Checkout() {
  const navigate = useNavigate()
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
  const { register, handleSubmit, setValue, watch } = useForm<FormData>()

  const cep = watch('CEP')

  const fetchAddressInfo = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      console.log('Fetched address data:', data)
      setValue('CEP', data.cep || '')
      setValue('address', data.logradouro || '')
      setValue('number', data.numero || '')
      setValue('complemento', '')
      setValue('UF', data.uf || '')
      setValue('bairro', data.bairro || '')
      setValue('cidade', data.localidade || '')

      const addressData = {
        address: data.logradouro || '',
        number: data.numero || '',
        complemento: '',
        UF: data.uf || '',
        bairro: data.bairro || '',
        cidade: data.localidade || '',
      }

      localStorage.setItem(
        '@javadelight:addressInfo',
        JSON.stringify(addressData),
      )
    } catch (error) {
      console.error('Error fetching address information:', error)
    }
  }
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    localStorage.setItem('@javadelight:addressInfo', JSON.stringify(data))
    navigate('/success')
  }
  useEffect(() => {
    const storedAddressInfo = localStorage.getItem('@javadelight:addressInfo')
    if (storedAddressInfo) {
      const addressData = JSON.parse(storedAddressInfo)
      setValue('address', addressData.address || '')
      setValue('number', addressData.number || '')
      setValue('complemento', addressData.complemento || '')
      setValue('UF', addressData.UF || '')
      setValue('bairro', addressData.bairro || '')
      setValue('cidade', addressData.cidade || '')
    }
  }, [setValue])
  return (
    <CheckOutContainer>
      <CheckOutHeroContainer>
        <CheckOutAddressCard>
          <h1>注文を完了します</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <header>
              <MapPin size={38} color="#4B2995" weight="fill" />
              <div className="header-card-text">
                <strong>配送先住所</strong>
                <p>注文品を受け取りたい住所を入力してください</p>
              </div>
            </header>
            <input
              type="text"
              {...register('CEP')}
              placeholder="〒/CEP"
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  fetchAddressInfo()
                }
              }}
            />
            <input
              type="text"
              {...register('address')}
              placeholder="住所/Endereço"
            />
            <div className="input-div">
              <input
                type="text"
                {...register('number')}
                placeholder="番地/número"
              />
              <input
                type="text"
                {...register('complemento')}
                placeholder=" 補足住所/complemento"
              />
              <input
                type="text"
                {...register('UF')}
                placeholder="都道府県/UF"
              />
              <input
                type="text"
                {...register('bairro')}
                placeholder="区/Bairro"
              />
              <input
                type="text"
                {...register('cidade')}
                placeholder="市/Cidade"
              />
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
              <button id="total" type="button" onClick={handleSubmit(onSubmit)}>
                注文を確認する
              </button>
            </NavLink>
          </div>
        </CheckOutCard>
      </CheckOutHeroContainer>
      <Footer />
    </CheckOutContainer>
  )
}
