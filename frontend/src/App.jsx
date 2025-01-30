import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Dashboard from "./components/Dashboard";



const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Signup setToken={setToken} />} />
        <Route path="/tasks" element={token ? <TaskForm token={token} fetchTasks={() => {}} /> : <Login setToken={setToken} />} />
        <Route path="/list" element={<TaskList/>} />
        <Route path="/tasklist" element={token ? <Dashboard /> : <Login setToken={setToken} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
