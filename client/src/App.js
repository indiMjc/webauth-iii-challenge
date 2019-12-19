import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Link } from 'react-router-dom';
import Users from './components/Users';

function App() {
  return (
    <div className='App'>
      <br />
      <br />
      <Link to='login'>Login</Link>
      <br />
      <br />
      <Link to='/register'>Register</Link>
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
      <Route path='/users' render={props => <Users {...props} />} />
    </div>
  );
}

export default App;
