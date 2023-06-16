import React from 'react';
import Profile from './Profile';
import TodoList from './TodoList';

const Dashboard: React.FC = () => {
    return (
      <>
        <h1>Dashboard</h1>
        <Profile />
        <TodoList />
      </>
    );
}

export default Dashboard;