// eslint-disable-next-line
// @ts-ignore
import backgroundImage from '@/public/home.jpg'
import styled from 'styled-components'
export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

export const HomeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.6);
  opacity: 0.9;
  z-index: 0;
`

export const HomeTextContainer = styled.div`
  position: absolute;
  left: 60%;
  top: 25%;
  right: 10%;
  z-index: 1;
  button {
    width: 100px;
    height: 100px;
    filter: brightness(0.8);
    border-radius: 100%;
    background: ${(props) => props.theme.background};
    border: 6px solid ${(props) => props.theme.black};
    box-shadow: 5px 5px 0px 2px rgba(0, 0, 0, 1);
  }
  button:hover {
    scale: 1.1;
    background: ${(props) => props.theme['pastel-green']};
    cursor: pointer;
    border-radius: 0;
  }
  p {
    filter: brightness(0.8);
    opacity: 1;
    z-index: 2;
    font-size: 3rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 100%;
    position: relative;
    line-break: auto;
    background: ${(props) => props.theme.background};
    border: 6px solid ${(props) => props.theme.black};
    box-shadow: 7.5px 7.5px 0px 7px rgba(0, 0, 0, 1);
    margin-bottom: 3rem;
  }
  p:hover {
    border-radius: 10px;
    /* background: ${(props) => props.theme['pastel-green']}; */
  }
  @media (max-width: 1024px) {
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 672px) {
    left: 10%;
    top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1.5rem;
    }
    button {
      width: 80px;
      height: 80px;
    }
  }
`
