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
  background: ${(props) => props.theme.background};
  border: 6px solid ${(props) => props.theme.black};
  text-shadow: 1px 4px 2px rgba(0, 0, 0, 0.5);
  .cart-div {
    padding: 2rem;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    height: 5rem;
    border-width: 6px;
    border-style: solid;
    border-color: black;
    border-right: none;
    /* border-left: 6px solid ${(props) => props.theme.black}; */
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
    background-color: ${(props) => props.theme['pastel-green']};
    @media (width > 500px) {
      right: 1.5rem;
      top: 0.8rem;
    }
  }
  .cart-div a {
    text-decoration: none;
  }
  .cart-div:hover {
    /* border-left: 6px solid ${(props) => props.theme.black}; */
    /* border-right: none; */
    padding: 2rem;
    display: flex;
    height: 5rem;
    align-items: center;
    background: ${(props) => props.theme['purple-100']};
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
      /* padding: 0 1rem 0 0; */
    }
    h1 {
      font-size: 1.5rem;
    }
    .icon {
      font-size: 2rem;
      /* padding: 0 5rem; */
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
