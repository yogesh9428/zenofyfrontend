import React, { useState } from 'react';
import '../styles/UserCard.css';

const UserCard = ({ user }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`user-card ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className="user-card-header">
        <h3>{user.name}</h3>
        <p className="user-email">Email: {user.email}</p>
      </div>
      <div className="user-card-body">
        <p>Goals: {user.goals.length}</p>
        {clicked && (
          <div className="goal-details">
            <h4>Goals:</h4>
            <ul>
              {user.goals.map((goal, index) => (
                <li key={index}>
                  <h5>{goal.title}</h5>
                  <p>Deadline: {goal.deadline}</p>
                  <p>Status: {goal.status}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
