import Loading from 'components/Common/Loading';
import './App.css';
import Cover from 'components/Main/Cover/Cover';
import {Outlet, useLocation, useNavigation} from "react-router-dom"
import PageAnimation from 'components/Common/PageAnimation';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { darkTheme, ligthTheme } from 'styles/theme';
import { useAppSelector } from 'redux/hooks';
import Header from 'components/Main/Header';

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  const { theme } = useAppSelector(state => state.theme);
  return (
      <ThemeProvider theme={theme === "dark" ? darkTheme : ligthTheme}>
        <GlobalStyles/>
        <div className="App">
            { location.pathname === "/" && <Cover />}
            {navigation.state === "loading" && <Loading />}
              <Header/>
              <PageAnimation/>
              <Outlet/>
        </div>
      </ThemeProvider>

  );
}

export default App;
