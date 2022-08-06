import { useTheme } from '@emotion/react'
import { IconButton } from '@mui/material'
import { createContext, useContext } from 'react'
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'

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
        <LightModeOutlined color='primary' />
      ) : (
        <DarkModeOutlined color='primary' />
      )}
    </IconButton>
  )
}

export default ToggleThemeMode
