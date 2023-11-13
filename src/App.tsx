import Loading from 'components/Common/Loading';
import './App.css';
import Cover from 'components/Cover/Cover';
import {Outlet, useLocation, useNavigation} from "react-router-dom"
import PageAnimation from 'components/Common/PageAnimation';

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  return (
    <div className="App">
        { location.pathname === "/" &&<Cover />}
        { navigation.state === "loading" && <Loading/>}
          <PageAnimation/>
          <Outlet/>
    </div>
  );
}

export default App;
