import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 0 0 10rem;
  background: ${(props) => props.theme['base-input']};
  border: 6px solid ${(props) => props.theme.black};
  .cart-div {
    padding: 2rem;
    display: flex;
    height: 5rem;
    border-width: 6px;
    border-style: solid;
    border-color: black;
    border-right: none;
    align-items: center;
    position: relative;
    @media (width < 500px) {
      padding: 1rem;
    }
  }
  .cart-div span {
    position: absolute;
    right: 0.5rem;
    top: 0.8rem;
    text-shadow: none;
    width: 1rem;
    height: 1rem;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 100%;
    color: ${(props) => props.theme.white};
    /* background-color: ${(props) => props.theme['purple-300']}; */
    background-color: ${(props) => props.theme['red-500']};
    @media (width > 500px) {
      right: 1.5rem;
      top: 0.8rem;
    }
  }
  .cart-div a {
    text-decoration: none;
  }
  .cart-div:hover {
    padding: 2rem;
    display: flex;
    height: 5rem;
    align-items: center;
    background: ${(props) => props.theme['pastel-green']};
    @media (max-width: 515px) {
      padding: 1rem;
    }
  }
  .cart-div svg {
    color: ${(props) => props.theme.white};
  }
  h1 {
    font-size: 2rem;
    line-break: auto;
  }
  @media (max-width: 768px) {
    height: 5rem;
    padding: 0 0 0 5rem;
    .cart-div {
      height: 5rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    .icon {
      font-size: 2rem;
    }
  }
  @media (max-width: 515px) {
    padding: 0 0 0 2rem;
    height: 5rem;
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .cart-div {
      height: 5rem;
    }
    .icon {
      height: 2rem;
      width: 2rem;
    }
  }
`
