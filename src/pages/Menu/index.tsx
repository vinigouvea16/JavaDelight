// eslint-disable-next-line
// @ts-ignore
import autorais from '@/public/icons/autorais.png'
// eslint-disable-next-line
// @ts-ignore
import comida from '@/public/icons/comida.png'
// eslint-disable-next-line
// @ts-ignore
import freshSoda from '@/public/icons/freshsoda.png'
// eslint-disable-next-line
// @ts-ignore
import fruitsalad from '@/public/icons/fruitsalad.png'
// eslint-disable-next-line
// @ts-ignore
import gelato from '@/public/icons/gelato.png'
// eslint-disable-next-line
// @ts-ignore
import lancamento from '@/public/icons/lancamento.png'
// eslint-disable-next-line
// @ts-ignore
import metodos from '@/public/icons/metodos.png'
// eslint-disable-next-line
// @ts-ignore
import outrasbebidas from '@/public/icons/outrasbebidas.png'
// eslint-disable-next-line
// @ts-ignore
import purista from '@/public/icons/purista.png'
// eslint-disable-next-line
// @ts-ignore
import shop from '@/public/icons/shop.png'
// eslint-disable-next-line
// @ts-ignore
import sobremesas from '@/public/icons/sobremesa.png'
import { Card } from 'components/Card'
import { Footer } from 'components/Footer'
import { useCart } from 'contexts/CartContext'
import { MenuContainer, MenuGridContainer } from './styles'
interface Product {
  imageUrl: string
  productName: string
  productTag: string
  cashValue: string
  quantity: number
}
export function Menu() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }
  return (
    <MenuContainer>
      <h1>
        完璧な<span>コーヒー、</span>いつでも
      </h1>
      <p>ジャワディライトでいつでもどこでもコーヒーを受け取りましょう</p>
      <MenuGridContainer>
        <Card
          productName="純粋主義者"
          productTag="純粋主義者"
          cashValue="400"
          imageUrl={purista}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="著作権"
          productTag="著作権"
          cashValue="600"
          imageUrl={autorais}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="フレッシュソーダ"
          productTag="フレッシュソーダ"
          cashValue="500"
          imageUrl={freshSoda}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="ジェラート"
          productTag="フラッペ"
          cashValue="500"
          imageUrl={gelato}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="食べ物"
          productTag="ベーカリー"
          cashValue="300"
          imageUrl={comida}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="打ち上げ"
          productTag="ニュース"
          cashValue="500"
          imageUrl={lancamento}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="メソッド"
          productTag="手作り"
          cashValue="800"
          imageUrl={metodos}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="フルーツサラダ"
          productTag="果物"
          cashValue="600"
          imageUrl={fruitsalad}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="他の飲み物"
          productTag="コーヒー以外の"
          cashValue="500"
          imageUrl={outrasbebidas}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="店"
          productTag="品種"
          cashValue="1500"
          imageUrl={shop}
          onAddToCart={handleAddToCart}
        />
        <Card
          productName="デザート"
          productTag="お菓子"
          cashValue="500"
          imageUrl={sobremesas}
          onAddToCart={handleAddToCart}
        />
      </MenuGridContainer>
      <Footer />
    </MenuContainer>
  )
}
