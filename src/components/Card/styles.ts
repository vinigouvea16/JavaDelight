import styled from 'styled-components'

export const CardContainer = styled.div`
  border: 6px solid ${(props) => props.theme.black};
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  box-shadow: 5px 5px 0px 2px rgba(0, 0, 0, 1);
  background-color: ${(props) => props.theme['pastel-green']};
  border-radius: 0px;
  /* transform: scale(1);
  transition: 200ms cubic-bezier(0.11, -0.25, 0.7, 1.22);
  transform-origin: bottom right; */
  &:hover {
    border-radius: 10px;
    /* scale: 1.03; */
  }
  h2 {
    font-size: 1.25rem;
  }
  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 0.875rem;
  }
  img {
    /* margin-top: -20px; */
    width: 200px;
    height: 200px;
  }
  h3 {
    padding-bottom: 0.5rem;
    /* font-size: 0.875rem; */
  }
  h3 span {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 0.875rem;
    background-color: ${(props) => props.theme['base-button']};
    padding: 0.25rem;
    border-radius: 4px;
    color: ${(props) => props.theme.black};
    margin-bottom: 0.5rem;
  }
  .arrows {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['yellow-100']};
    gap: 0.5rem;
    box-shadow: 2px 2px 0px 1px rgba(92, 90, 90, 0.75);
    border-radius: 3px;
    height: 45px;
    width: 75px;
    span {
      color: ${(props) => props.theme.black};
      font-size: 1rem;
    }
    button {
      background: none;
      border: none;
      height: 20px;
    }
  }
  .add-to-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    gap: 0.5rem;
    .card-cart {
      background-color: ${(props) => props.theme['purple-300']};
      padding: 0.5rem;
      box-shadow: 2px 2px 0px 1px rgba(0, 0, 0, 1);
      border-radius: 3px;
    }
    .card-cart:hover {
      opacity: 0.9;
      scale: 1.1;
      border-radius: 0;
    }
  }
  @media (max-width: 840px) {
    width: 200px;
    height: 350px;
    img {
      margin-top: -20px;
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 515px) {
    width: 150px;
    height: 300px;
    gap: 0;
    h2 {
      padding: 0 1rem;
      font-size: 1rem;
    }
    h5 {
      font-size: 0.625rem;
    }
    p {
      padding: 0 1rem;
    }
    img {
      margin-top: 0px;
      width: 100px;
      height: 100px;
    }
    .arrows {
      height: 40px;
    }
    .card-cart {
      height: 40px;
    }
  }
`
