import './App.css';
import Cover from 'components/Cover/Cover';
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
          <Cover />
          <Outlet/>
    </div>
  );
}

export default App;
