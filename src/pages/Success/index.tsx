// eslint-disable-next-line
// @ts-ignore
import CheckOutImage from '@/public/catimage.jpg'
import { Clock, CurrencyCircleDollar, MapPin } from '@phosphor-icons/react'
import { Footer } from 'components/Footer'
import {
  CheckOutInfo,
  SuccessCard,
  SuccessContainer,
  SuccessHeroContainer,
} from './styles'

export function Success() {
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
                へ配達する：<span> Rua João Daniel Martinelli, 102</span>
                <br />
                <p>farrapos - porto alegre</p>
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
                <span>デビット</span>
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
