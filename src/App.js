import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home';

const Host = () => <h1>Host</h1>;
const Help = () => <h1>Help</h1>;
const Login = () => <h1>Login</h1>;
const Signup = () => <h1>Sign up</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Route
        exact
        path='/'
        render={() => {
          return <Home title='This is Home' />;
        }}
      />
      <Route exact path='/host' component={Host} />
      <Route exact path='/help' component={Help} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </Router>
  );
}

export default App;
