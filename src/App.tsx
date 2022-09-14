import { ThemeProvider } from 'styled-components'
import { UserContextProvider } from './contexts/UserContext'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
