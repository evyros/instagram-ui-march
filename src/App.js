
import './App.scss';
import Header from './Header/Header';
import Register from './Register/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './Login/Login';
import Feed from './Feed/Feed';

function App() {
  return (
  <Router>
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/" exact>
                <Feed />
            </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
