import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  /* scrollbar-gutter: stable; */
}
:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['base-text']};
}

body{
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-title']};
  font-family: 'Roboto', sans-serif;
}

body, input, textarea, button{
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  font-weight: 400;
}
/* scroll-bar */
body {
  --sb-track-color: #000000;
  --sb-thumb-color: #9efcb4;
  --sb-size: 8px;

  scrollbar-color: var(--sb-thumb-color) 
                   var(--sb-track-color);
}

body::-webkit-scrollbar {
  width: var(--sb-size) 
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 8px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 8px;
  border: 2px solid #131415;
  }
`
