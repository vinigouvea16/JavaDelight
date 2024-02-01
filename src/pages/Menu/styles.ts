import styled from 'styled-components'

export const MenuContainer = styled.div`
  border: 6px solid ${(props) => props.theme.black};
  width: 100%;
  top: 73px;
  position: absolute;
  background-color: ${(props) => props.theme['yellow-100']};
  @media (width > 1440px) {
    /* height: 95vh; */
    width: 100%;
  }
  h1 {
    position: relative;
    color: ${(props) => props.theme.black};
    font-size: 4rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin: 3rem;
    text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
    @media (max-width: 1280px) {
      font-size: 3rem;
      margin: 2rem;
    }
    @media (max-width: 840px) {
      font-size: 2rem;
      margin: 2rem;
      text-shadow: none;
    }
  }
  h1 span {
    border: 2px solid ${(props) => props.theme.black};
    background-color: ${(props) => props.theme['pastel-green']};
    color: ${(props) => props.theme['yellow-300']};
    text-shadow: 3px 5px 10px rgba(0, 0, 0, 1);
    box-shadow: 4px 4px 0px 2px rgba(0, 0, 0, 1);
    margin: 0 0.5rem;
    transform: rotate(350deg);
    @media (max-width: 840px) {
      transform: rotate(350deg);
      box-shadow: 2px 2px 0px 2px rgba(0, 0, 0, 1);
      text-shadow: none;
    }
  }
  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    display: flex;
    justify-content: center;
    margin: 1rem;
    @media (max-width: 1280px) {
      font-size: 1.25rem;
      padding: 1rem;
    }
  }
`

export const MenuGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  padding: 4rem;
  gap: 2rem;
  @media (max-width: 840px) {
    padding: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  @media (max-width: 515px) {
    padding: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`
