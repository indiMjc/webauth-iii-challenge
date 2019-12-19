import React, { useEffect, useState } from 'react';
import { authAxios } from '../util/authAxios';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    authAxios()
      .get(`http://localhost:3030/users/restrictresults`)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      {users.map(i => (
        <User
          username={i.username}
          department={i.department}
          key={i.username}
        />
      ))}
    </>
  );
};

export default Users;
