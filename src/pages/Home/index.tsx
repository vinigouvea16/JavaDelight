// eslint-disable-next-line
// @ts-ignore
import { ArrowRight } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { HomeBackground, HomeContainer, HomeTextContainer } from './styles'
export function Home() {
  return (
    <HomeContainer>
      <HomeBackground />
      <HomeTextContainer>
        <p>メニューをチェックしてください</p>
        <NavLink to="/menu" title="arrow">
          <button>
            <ArrowRight size={60} color="#272221" weight="bold" />
          </button>
        </NavLink>
      </HomeTextContainer>
    </HomeContainer>
  )
}
