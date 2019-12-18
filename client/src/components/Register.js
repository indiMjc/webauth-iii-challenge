import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setuser] = useState({
    username: '',
    password: '',
    department: ''
  });

  const handleChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const register = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3030/auth/register`, user)
      .then(res => {
        console.log(res);
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
        <br />
        <br />
        <label>
          Department:
          <input
            type='text'
            name='department'
            value={user.department}
            onChange={handleChange}
          />
        </label>
      </form>
      <br />
      <button onClick={register}>Register</button>
    </>
  );
};

export default Register;
