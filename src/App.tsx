import Loading from 'components/Common/Loading';
import './App.css';
import Cover from 'components/Cover/Cover';
import {Outlet, useNavigation} from "react-router-dom"

function App() {
  const navigation = useNavigation();
  return (
    <div className="App">
        {navigation.state === "loading" && <Loading/>}
          <Cover />
          <Outlet/>
    </div>
  );
}

export default App;
