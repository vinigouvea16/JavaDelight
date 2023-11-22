// eslint-disable-next-line
// @ts-ignore
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { CardContainer } from './styles'

interface CardProps {
  imageUrl: string
  productName: string
  productTag: string
  cashValue: string
}

export function Card({
  imageUrl,
  productName,
  productTag,
  cashValue,
}: CardProps) {
  return (
    <CardContainer>
      <img src={imageUrl} alt="" />
      <h2>{productName}</h2>
      {/* <p>お湯と挽いた豆で作る伝統的なコーヒー</p> */}
      <h5>{productTag}</h5>
      <h3>
        ¥ <span>{cashValue}</span>
      </h3>
      <div className="add-to-cart">
        <div className="arrows">
          <button>
            <Minus size={20} color="#111" weight="light" />
          </button>
          <span>1</span>
          <button>
            <Plus size={20} color="#111" weight="light" />
          </button>
        </div>
        <button className="card-cart">
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
