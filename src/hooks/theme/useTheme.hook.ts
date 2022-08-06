import { useMediaQuery, createTheme, PaletteMode } from '@mui/material'
import { useState, useMemo } from 'react'

export default () => {
  const [mode, setMode] = useState<PaletteMode>(
    useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  )
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        )
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#A6E3E9',
                  light: '#CBF1F5',
                  dark: '#71C9CE'
                }
              }
            : {
                background: {
                  default: '#041C32',
                  paper: '#041C32'
                },
                primary: {
                  main: '#EAE3D2',
                  light: '#F9F5EB',
                  dark: '#FFE5B4'
                }
              })
        }
      }),
    [mode]
  )

  return { theme, colorMode }
}
