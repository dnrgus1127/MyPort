import Header from "components/Main/Header";
import { createContext, useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTheme } from "redux/reducer/themeReducer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { darkTheme, ligthTheme } from "styles/theme";

export const UserAgentContext = createContext<{ isMobile: boolean; isSafari: boolean } | null>(null);

export default function RootLayout() {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme) {
      dispatch(setTheme(theme));
    }
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

        <Outlet />
        <Header />
      </div>
    </ThemeProvider>
  );
}
