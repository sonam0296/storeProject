import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Component/Auth/Login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
