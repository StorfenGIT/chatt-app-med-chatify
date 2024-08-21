import React from 'react';

const Board = ({ user, accounts }) => {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <h3>Registered Users:</h3>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>{account.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
