
import './App.scss';
import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Register from './Register/Register';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './Login/Login';
import Feed from './Feed/Feed';
import { UserService } from './services/user.service';
import { UserContext } from './user-context';
import PostCreate from './PostCreate/PostCreate';
import PostPage from './PostPage/PostPage';

function App() {
    const history = useHistory();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getMe() {
            try {
                const user = await UserService.me();
                if (!user) {
                    history.push('/login');
                    return;
                }
                setUser(user);
            } catch(err) {
                console.log(err);
            }
        }
        getMe();
    }, [history]);

    function isLoggedIn() {
        return Boolean(Object.keys(user).length);
    }

  return (
      <UserContext.Provider value={{user, setUser}}>
        <div className="App d-flex flex-column flex-sm-column-reverse vh-100">
            <div className="flex-grow-1 main">
              <div className="container mt-lg-4">
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/post/create">
                        <PostCreate />
                    </Route>
                    <Route path="/post/:id">
                        <PostPage />
                    </Route>
                    <Route path="/" exact>
                        <Feed />
                    </Route>
                </Switch>
              </div>
            </div>
            { isLoggedIn() && <Header /> }
        </div>
      </UserContext.Provider>
  );
}

export default App;
