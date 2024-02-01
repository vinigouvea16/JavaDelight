import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  z-index: 1;
  bottom: 0;
  left: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 0 0 10rem;
  background: ${(props) => props.theme['base-input']};
  border-top: 6px solid ${(props) => props.theme.black};
  border-bottom: 6px solid ${(props) => props.theme.black};
  text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  @media (width > 1440px) {
    /* position: absolute; */
  }
  @media (max-width: 960px) {
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .socials {
    border-left: 6px solid ${(props) => props.theme.black};
    padding: 0 4rem;
    gap: 3rem;
    display: flex;
    height: 5rem;
    align-items: center;
  }
  .contact-info {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 3rem;
    padding-right: 10rem;
  }
  .contact-info a {
    text-decoration: none;
    color: ${(props) => props.theme['base-title']};
    font-size: 2rem;
    font-weight: bold;
  }
  @media (max-width: 1266px) {
    padding: 0 0 0 4rem;
    .socials {
      padding: 0 2rem;
    }
    .contact-info a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 943px) {
    .contact-info a {
      font-size: 1rem;
    }
    .contact-info {
      padding: 0;
    }
  }
  @media (max-width: 679px) {
    .contact-info {
      display: none;
    }
  }
  @media (max-width: 515px) {
    height: 4rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    .footer {
      display: flex;
      flex-direction: column;
    }
    .icon {
      display: none;
    }
    .contact-info {
      display: none;
    }
    .socials {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border: none;
    }
  }
`
