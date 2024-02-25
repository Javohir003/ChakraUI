import { CSSReset, ColorModeProvider, theme } from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';

import HomePage from './HomePage'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
            <CSSReset/>
            <HomePage/>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

export default App
