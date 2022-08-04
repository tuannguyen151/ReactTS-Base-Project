import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import Routes from './routes'
import useThemeHook from './hooks/theme/useTheme.hook'
import { ColorModeContext } from './components/common/ToggleThemeMode'

const App = () => {
  const { theme, colorMode } = useThemeHook()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {Routes}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
