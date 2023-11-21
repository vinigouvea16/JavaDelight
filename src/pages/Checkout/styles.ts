import styled from 'styled-components'

export const CheckOutContainer = styled.div`
  /* border: 6px solid ${(props) => props.theme.black}; */
  /* width: 100%; */
  /* height: 100vh; */
  top: 73px;
  position: absolute;
  background-color: ${(props) => props.theme['pastel-green']};
  overflow: hidden;
  @media (min-width: 960px) {
    height: 100vh;
    width: 100%;
  }
  @media (max-width: 960px) {
  }
  h1 {
    color: ${(props) => props.theme.black};
    font-size: 3rem;
    font-weight: 400;
  }
`
export const CheckOutHeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93%;
  @media (max-width: 1024px) {
    margin: 1rem;
  }
  @media (max-width: 800px) {
    margin-bottom: 3rem;
    /* height: 150%; */
    flex-direction: column;
  }

  header {
    display: flex;
    gap: 0.5rem;
  }

  form {
    gap: 2rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['base-card']};
    border: 2px solid black;
    border-top: 0px solid black;
    box-shadow: 3px 4px 0px 1px rgba(0, 0, 0, 1);
    /* border-radius: 8px; */
  }
  input {
    border: none;
    box-shadow: 1px 1px 0px 2px rgba(0, 0, 0, 1);
    height: 2.5rem;
  }
  .input-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
  .payment-div {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${(props) => props.theme['base-card']};
    /* border-radius: 6px; */
  }
  .payment-buttons button {
    padding: 1rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    font-size: 0.75rem;
    width: 100%;
    background-color: ${(props) => props.theme['base-button']};
  }
  .payment-buttons {
    display: flex;
    gap: 2rem;
  }
  .payment-div {
    margin-top: 2rem;
    border: 2px solid black;
    box-shadow: 3px 4px 0px 1px rgba(0, 0, 0, 1);
  }
`

export const CheckOutAddressCard = styled.div`
  padding: 2.5rem;
  /* gap: 2rem; */
  display: flex;
  flex-direction: column;

  h1 {
    border: 2px solid black;
    background-color: ${(props) => props.theme['yellow-100']};
    box-shadow: 3px 4px 0px 1px rgba(0, 0, 0, 1);
    /* background-color: ${(props) => props.theme['yellow-100']}; */
  }
  @media (max-width: 500px) {
    .input-div {
      display: grid;
      grid-template-columns: auto;
      /* grid-auto-rows: 1fr 1fr 1fr; */
      gap: 16px 1em;
      grid-template-areas:
        'number complemento UF'
        'bairro cidade cidade';
    }
    #CEP {
      width: 30%;
    }
    #number {
      grid-area: number;
      width: 100%;
    }
    #complemento {
      grid-area: complemento;
      width: 100%;
    }
    #bairro {
      grid-area: bairro;
      width: 100%;
    }
    #cidade {
      grid-area: cidade;
      width: 100%;
    }
    #UF {
      grid-area: UF;
      width: 100%;
    }
  }
`

export const CheckOutCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  border: 2px solid black;
  background-color: ${(props) => props.theme['yellow-100']};
  box-shadow: 3px 4px 0px 1px rgba(0, 0, 0, 1);
  button {
    cursor: pointer;
  }
  .selected-items {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }
  .selected-items img {
    width: 100px;
    height: 100px;
    padding-bottom: 1rem;
  }
  .card {
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
  }
  .div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .total {
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }
  .total button {
    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme.white};
    border: none;
    padding: 1rem;
    width: 100%;
    font-size: 0.875rem;
  }
  .arrows {
    display: flex;
    align-items: center;
    margin: 1rem;
  }
  .arrows button {
    border: 1px solid black;
    align-items: center;
    display: flex;
    padding: 4px;
  }
  .arrows span {
    border: 1px solid black;
    background-color: ${(props) => props.theme['base-card']};
    padding: 0px 8px;
  }
  #minus {
    border-radius: 4px 0px 0px 4px;
  }
  #plus {
    border-radius: 0px 4px 4px 0px;
  }
  #x {
    border: none;
    padding: 0;
    margin: 0;
    width: 20px;
    height: 20px;
  }
  #total {
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 3px 4px 0px 1px rgba(0, 0, 0, 1);
  }
  .div-header,
  .div-body {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }
  .div-header h3 {
    padding-left: 1rem;
  }
  h2 {
    border-bottom: 2px solid black;
    background-color: ${(props) => props.theme['yellow-100']};
    padding-left: 1rem;
    /* box-shadow: -3px 4px 0px 1px rgba(0, 0, 0, 0.5); */
  }
`