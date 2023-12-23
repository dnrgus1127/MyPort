import PageLoading from "components/Common/PageLoading";
import Header from "components/Main/Header";
import { createContext, useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation, useNavigation } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { darkTheme, ligthTheme } from "styles/theme";

export const UserAgentContext = createContext<{ isMobile: boolean; isSafari: boolean } | null>(null);

export default function RootLayout() {
  const { theme } = useAppSelector((state) => state.theme);
  const { state } = useNavigation();

  useEffect(() => {
    const checkMobile = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : ligthTheme}>
      <GlobalStyles />
      <div className="App">
        <ScrollRestoration
          getKey={(location, matches) => {
            return location.key;
          }}
        />
        {state === "loading" && <PageLoading />}

        <Outlet />
        <Header />
      </div>
    </ThemeProvider>
  );
}
