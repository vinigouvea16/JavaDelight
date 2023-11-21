import { Card } from 'components/Card'
import { Footer } from 'components/Footer'
import { MenuContainer, MenuGridContainer } from './styles'

export function Menu() {
  return (
    <MenuContainer>
      <h1>
        完璧な<span>コーヒー</span> ,いつでも
      </h1>
      <p>ジャワディライトでいつでもどこでもコーヒーを受け取りましょう</p>
      <MenuGridContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </MenuGridContainer>
      <Footer />
    </MenuContainer>
  )
}
