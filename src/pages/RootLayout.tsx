import React, { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/GlobalStyles'
import { darkTheme, ligthTheme } from 'styles/theme';
import { createContext } from 'react';

export const UserAgentContext = createContext<{ isMobile: boolean;  isSafari :boolean} | null>(null);

export default function RootLayout() {
    const navigation = useNavigation();
  const location = useLocation();
  const { theme } = useAppSelector(state => state.theme);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSafari, setIsSafari] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Androiod/i.test(navigator.userAgent));
    setIsSafari(/Safari|safari|iPhone|iPad|iPod/i.test(navigator.userAgent));

    const checkMobile = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

      setIsMobile(/iPhone|iPad|iPod|Androiod/i.test(navigator.userAgent));
      setIsSafari(/Safari|safari|iPhone|iPad|iPod/i.test(navigator.userAgent));
    }
    
      window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    }
  }, [])
  
  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  },[])
  
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : ligthTheme}>
      <UserAgentContext.Provider value={{isMobile,isSafari}}>

      <GlobalStyles />
          <div className='App'>                    
        <ScrollRestoration  getKey={(location, matches) => {
                return location.key;
            }} />
          <Outlet />
        </div>
        </UserAgentContext.Provider>
      </ThemeProvider>
  )
}
