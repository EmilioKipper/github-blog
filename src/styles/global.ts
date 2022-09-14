import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }
`
