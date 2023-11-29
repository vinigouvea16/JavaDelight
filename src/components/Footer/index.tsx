import {
  Coffee,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { FooterContainer } from './styles'
export function Footer() {
  return (
    <FooterContainer>
      <div className="footer">
        <Coffee className="icon" size={40} color="#272221" weight="fill" />
        <div className="contact-info">
          <NavLink to="https://www.linkedin.com/in/vinicius-gouvea-969008289/">
            <a id="contact">接触</a>
          </NavLink>
          <NavLink to="#">
            <a id="help">ヘルプ</a>
          </NavLink>
          <NavLink to="#">
            <a id="about-us">私たちについて</a>
          </NavLink>
        </div>
      </div>
      <div className="socials">
        <NavLink to="http://instagram.com">
          <InstagramLogo size={40} color="#272221" weight="fill" />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/vinicius-gouvea-969008289/">
          <LinkedinLogo size={40} color="#272221" weight="fill" />
        </NavLink>

        <NavLink to="http://twitter.com">
          <TwitterLogo size={40} color="#272221" weight="fill" />
        </NavLink>
      </div>
    </FooterContainer>
  )
}
