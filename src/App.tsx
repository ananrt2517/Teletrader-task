import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navigation from './components/Navigation';
import { useSelector } from "react-redux";

function App() {

  const login = useSelector((state: any) => state?.login)

  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        {login ? <Route exact path='/favorites' component={Favorites}></Route> : null}
      </Switch>
    </Router>
  );
}

export default App;
