import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Component/Auth/Login';
import SignUp from './Component/Auth/SignUp';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={SignUp}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
