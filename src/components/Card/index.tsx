// eslint-disable-next-line
// @ts-ignore
import coffee from '@/public/icons/purista.png'
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { CardContainer } from './styles'
export function Card() {
  return (
    <CardContainer>
      <img src={coffee} alt="" />
      <h2>伝統的なエスプレッソ</h2>
      {/* <p>お湯と挽いた豆で作る伝統的なコーヒー</p> */}
      <h5>伝統的</h5>
      <h3>
        ¥ <span>258</span>
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
