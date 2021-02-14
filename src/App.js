
import './App.scss';
import { useEffect } from 'react';
import Header from './Header/Header';
import Register from './Register/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './Login/Login';
import Feed from './Feed/Feed';
import { UserService } from './services/user.service';
import { useHistory } from 'react-router-dom';

function App() {
    const history = useHistory();

    useEffect(() => {
        UserService.me()
            .then(user => {
                if (!user) {
                    // history.push('/login');
                }
            });
    }, [history]);

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
