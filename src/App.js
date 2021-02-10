
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
import Cookies from 'js-cookie';

function App() {

    useEffect(() => {
        const body = {
            token: Cookies.get('instagram-user')
        };
        fetch('http://localhost:4000/user/me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => {
            if (res.status !== 200) {
                console.log('you are not a user');
                return;
            }
            res.json().then(user => console.log(user));
        })
    }, []);

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
