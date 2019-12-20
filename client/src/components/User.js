import React from 'react';

const User = props => {
  return (
    <>
      <h2>{props.username}</h2>
      <p>{props.department}</p>
    </>
  );
};

export default User;
