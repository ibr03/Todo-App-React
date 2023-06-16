import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import TodoList from './components/Dashboard/TodoList';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className='container'>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;