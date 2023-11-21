import styled from 'styled-components'

export const SuccessContainer = styled.div`
  border: 6px solid ${(props) => props.theme.black};
  /* width: 100%; */
  height: 100%;
  margin: 0 auto;
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-100']};
  h1 {
    /* color: ${(props) => props.theme.black}; */
    color: ${(props) => props.theme['pastel-green']};
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 1px 4px 2px rgba(0, 0, 0, 0.5);
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    padding-left: 0.5rem;
  }

  img {
    width: 500px;
    height: 350px;
    transform: rotate(350deg);
    box-shadow:
      5px 5px 0px rgb(239, 196, 42),
      10px 10px 0px rgb(33, 98, 185),
      15px 15px 0px rgb(255, 143, 99),
      20px 20px 0px rgb(199, 177, 153),
      25px 25px 0px rgb(47, 47, 48),
      30px 30px 0px rgb(158, 252, 180),
      -5px -5px 0px rgb(229, 215, 204);
  }
  @media (max-width: 1024px) {
    img {
      width: 300px;
      height: 250px;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 476px) {
    height: 110%;
    img {
      transform: rotate(5deg);
    }
  }
`

export const SuccessCard = styled.div`
  display: flex;
  flex-direction: column;
  /* h1,
  h2 {
    border-bottom: 2px solid ${(props) => props.theme.black};
  } */
  height: 450px;
  /* box-shadow: 6px 6px 0px 3px rgba(32, 201, 130, 0.64); */
`

export const CheckOutInfo = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  padding: 3rem;
  box-shadow: 6px 6px 1px 2px rgba(1, 1, 1, 1);
  gap: 2rem;
  span {
    font-weight: bold;
  }
  .address-info,
  .delivery-time,
  .payment-type {
    display: flex;
    gap: 1rem;
  }
  /* height: 100%; */
  border: 2px solid ${(props) => props.theme.black};
  @media (max-width: 800px) {
    padding: 1rem;
    gap: 1rem;
    p {
      width: 148px;
      font-size: 0.875rem;
    }
  }
`
export const SuccessHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 2rem;
  gap: 5rem;
  @media (max-width: 1024px) {
    margin: auto 5rem;
  }
  @media (max-width: 478px) {
    /* margin: auto 1rem; */
    flex-direction: column;
    gap: 0;
  }
`
