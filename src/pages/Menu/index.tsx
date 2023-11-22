// eslint-disable-next-line
// @ts-ignore
import autorais from '@/public/icons/autorais.png'
import comida from '@/public/icons/comida.png'
import freshSoda from '@/public/icons/freshsoda.png'
import fruitsalad from '@/public/icons/fruitsalad.png'
import gelato from '@/public/icons/gelato.png'
import lancamento from '@/public/icons/lancamento.png'
import metodos from '@/public/icons/metodos.png'
import outrasbebidas from '@/public/icons/outrasbebidas.png'
import purista from '@/public/icons/purista.png'
import shop from '@/public/icons/shop.png'
import sobremesas from '@/public/icons/sobremesa.png'
import { Card } from 'components/Card'
import { Footer } from 'components/Footer'
import { MenuContainer, MenuGridContainer } from './styles'

export function Menu() {
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
        />
        <Card
          productName="著作権"
          productTag="著作権"
          cashValue="600"
          imageUrl={autorais}
        />
        <Card
          productName="フレッシュソーダ"
          productTag="フレッシュソーダ"
          cashValue="500"
          imageUrl={freshSoda}
        />
        <Card
          productName="ジェラート"
          productTag="フラッペ"
          cashValue="500"
          imageUrl={gelato}
        />
        <Card
          productName="食べ物"
          productTag="ベーカリー"
          cashValue="300"
          imageUrl={comida}
        />
        <Card
          productName="打ち上げ"
          productTag="ニュース"
          cashValue="500"
          imageUrl={lancamento}
        />
        <Card
          productName="メソッド"
          productTag="手作り"
          cashValue="800"
          imageUrl={metodos}
        />
        <Card
          productName="フルーツサラダ"
          productTag="果物"
          cashValue="600"
          imageUrl={fruitsalad}
        />
        <Card
          productName="他の飲み物"
          productTag="コーヒー以外の"
          cashValue="500"
          imageUrl={outrasbebidas}
        />
        <Card
          productName="店"
          productTag="品種"
          cashValue="1500"
          imageUrl={shop}
        />
        <Card
          productName="デザート"
          productTag="お菓子"
          cashValue="500"
          imageUrl={sobremesas}
        />
      </MenuGridContainer>
      <Footer />
    </MenuContainer>
  )
}
