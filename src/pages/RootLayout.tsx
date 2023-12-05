import React from 'react'
import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/GlobalStyles'
import { darkTheme, ligthTheme } from 'styles/theme';

export default function RootLayout() {
    const navigation = useNavigation();
  const location = useLocation();
  const { theme } = useAppSelector(state => state.theme);
  return (
      <ThemeProvider theme={theme === "dark" ? darkTheme : ligthTheme}>
      <GlobalStyles />
          <div className='App'>                    
        <ScrollRestoration  getKey={(location, matches) => {
                return location.key;
            }} />
          <Outlet />
        </div>
      </ThemeProvider>
  )
}
