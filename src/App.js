import './Phonebook.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/routing/PrivateRoute';
import Phonebook from './pages/Phonebook';
import Login from './pages/Login';
import UserState from './context/user/UserState';
import ContactState from './context/contacts/ContactState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}
function App() {
    return (
        <UserState>
            <ContactState>
                <Router>
                    <div className='App'>
                        <Navbar />
                        <Switch>
                            <PrivateRoute
                                exact
                                path='/'
                                component={Phonebook}
                            />
                            <Route exact path='/login' component={Login} />
                        </Switch>
                    </div>
                </Router>
            </ContactState>
        </UserState>
    );
}

export default App;
