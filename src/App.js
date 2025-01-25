// src/App.js
import React, { useState, useMemo } from 'react';
import './App.css';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import UserDetailModel from './components/UserDetailModel';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addUser = (user) => {
    setUsers([
      ...users,
      {
        ...user,
        goals: [
          { title: 'Goal 1', deadline: '2025-02-15', status: 'In Progress' },
          { title: 'Goal 2', deadline: '2025-03-10', status: 'Completed' },
        ],
      },
    ]);
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Calculate total goals, completed goals, and completion percentage
  const goalSummary = useMemo(() => {
    let totalGoals = 0;
    let completedGoals = 0;

    users.forEach(user => {
      totalGoals += user.goals.length;
      completedGoals += user.goals.filter(goal => goal.status === 'Completed').length;
    });

    const completionPercentage = totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

    return { totalGoals, completedGoals, completionPercentage };
  }, [users]);

  return (
    <div className="App">
      <h1>User Dashboard</h1>
      <AddUserForm addUser={addUser} />
      <UserList users={users} openModal={openModal} />
      
      {/* Goal Tracking Summary */}
      <div className="goal-summary">
        <h3>Goal Tracking Summary</h3>
        <p><strong>Total Goals:</strong> {goalSummary.totalGoals}</p>
        <p><strong>Completed Goals:</strong> {goalSummary.completedGoals}</p>
        <p><strong>Completion Percentage:</strong> {goalSummary.completionPercentage.toFixed(2)}%</p>
      </div>

      {isModalOpen && (
        <UserDetailModel user={selectedUser} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
