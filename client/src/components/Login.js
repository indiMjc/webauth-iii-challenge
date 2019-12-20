import React, { useState } from 'react';
import { authAxios } from '../util/authAxios';
import axios from 'axios';

const Login = props => {
  const [user, setuser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3030/auth/login`, user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/users');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <br />
      <br />
      <form>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </label>
      </form>
      <br />
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
