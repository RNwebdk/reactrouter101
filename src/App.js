import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import Help from './Help';

const Host = () => <h1>Host</h1>;
const Login = () => <h1>Login</h1>;
const Signup = () => <h1>Sign up</h1>;

function App() {
  return (
    <Router>
      <Route path='/' component={Navbar} />
      <Route
        exact
        path='/'
        render={(props) => {
          return (
            <Home
              title='This is Home'
              history={props.history}
              match={props.match}
            />
          );
        }}
      />
      <Route exact path='/host' component={Host} />
      <Route path='/help' component={Help} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </Router>
  );
}

export default App;
