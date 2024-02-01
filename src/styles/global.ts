import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  scrollbar-width: thin;
  scrollbar-color: #F1E9C9 #000;
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
`
