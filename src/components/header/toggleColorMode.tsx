'use client';

import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ThemeToggle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
        {theme.palette.mode === 'dark' ? <WbSunnyIcon /> : <ModeNightIcon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setMode(savedTheme as 'light' | 'dark');
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Paleta para o tema claro
                primary: {
                  main: '#1976d2',
                },
                secondary: {
                  main: '#dc004e',
                },
                background: {
                  default: '#f5f5f5',
                  paper: '#fff',
                },
              }
            : {
                // Paleta para o tema escuro
                primary: {
                  main: '#90caf9',
                },
                secondary: {
                  main: '#f48fb1',
                },
                background: {
                  default: '#303030',
                  paper: '#424242',
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
