// eslint-disable-next-line
// @ts-ignore
import CheckOutImage from '@/public/catimage.jpg'
import { Clock, CurrencyCircleDollar, MapPin } from '@phosphor-icons/react'
import { Footer } from 'components/Footer'
import { useCart } from 'hooks/cartHooks'
import { useEffect, useState } from 'react'
import {
  CheckOutInfo,
  SuccessCard,
  SuccessContainer,
  SuccessHeroContainer,
} from './styles'

export function Success() {
  const { selectedPaymentType } = useCart()
  const [addressInfo, setAddressInfo] = useState({
    address: '',
    number: '',
    complemento: '',
    UF: '',
    bairro: '',
    cidade: '',
  })
  useEffect(() => {
    const storedAddressInfo = localStorage.getItem('@javadelight:addressInfo')
    if (storedAddressInfo) {
      setAddressInfo(JSON.parse(storedAddressInfo))
    }
  }, [])
  useEffect(() => {}, [addressInfo])
  return (
    <SuccessContainer>
      <SuccessHeroContainer>
        <SuccessCard>
          <h1>うおおお！注文が確認されました</h1>
          <h2>あとは待っていればすぐにコーヒーが届きます</h2>
          <CheckOutInfo>
            <div className="address-info">
              <MapPin size={48} color="#a78bfa" weight="fill" />
              <p>
                へ配達する：
                <span>
                  {addressInfo.address}, {addressInfo.number}
                </span>
                <br />
                <p>
                  {addressInfo.cidade} - {addressInfo.UF}
                </p>
              </p>
            </div>
            <div className="delivery-time">
              <Clock size={48} color="#a78bfa" weight="fill" />
              <p>
                配送予測
                <br />
                <span>20 min - 30min</span>
              </p>
            </div>
            <div className="payment-type">
              <CurrencyCircleDollar size={48} color="#a78bfa" weight="fill" />
              <p>
                配達時の支払い
                <br />
                <span>
                  {selectedPaymentType || 'Not Selected / 選択されていない'}
                </span>
              </p>
            </div>
          </CheckOutInfo>
        </SuccessCard>
        <img src={CheckOutImage} alt="" />
      </SuccessHeroContainer>
      <Footer />
    </SuccessContainer>
  )
}
