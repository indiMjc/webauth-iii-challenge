import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
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
        console.log(res);
        localStorage.setItem('token', res.data.token);
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
