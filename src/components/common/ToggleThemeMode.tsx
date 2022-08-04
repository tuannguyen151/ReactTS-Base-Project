import { useTheme } from '@emotion/react'
import { IconButton } from '@mui/material'
import { createContext, useContext } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export const ColorModeContext = createContext({
  toggleColorMode: (): void => undefined
})

const ToggleThemeMode = () => {
  const theme = useTheme() as { palette: { mode: string } }
  const colorMode = useContext(ColorModeContext)

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color='inherit'
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}

export default ToggleThemeMode
