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
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const storedToken = localStorage.getItem('token'); // Or however you store it
//         if (storedToken) {
//           setToken(storedToken);
//           const response = await axios.get('http://localhost:3005/tasks', { // Port 3005
//             headers: {
//               Authorization: `Bearer ${storedToken}`,
//             },
//           });
//           setTasks(response.data);
//         } else {
//           console.log("No token found.");
//           // Redirect to login or display a message
//         }
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks(); // Call the function
//   }, []); // Empty dependency array for on-mount fetch

//   const handleTaskCreate = async (newTaskData) => {
//     try {
//       const storedToken = localStorage.getItem('token');
//       if (!storedToken) {
//         console.error("No token available.");
//         return;
//       }

//       const response = await axios.post('http://localhost:3000/tasks', newTaskData, { // Port 3005
//         headers: {
//           Authorization: `Bearer ${storedToken}`,
//         },
//       });

//       setTasks((prevTasks) => [...prevTasks, response.data]);
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleTaskDelete = async (id) => {
//     try {
//       const storedToken = localStorage.getItem('token');
//       if (!storedToken) {
//         console.error("No token available.");
//         return;
//       }
//       await axios.delete(`http://localhost:3000/tasks/${id}`, { // Port 3005
//         headers: {
//           Authorization: `Bearer ${storedToken}`,
//         },
//       });
//       setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//         <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
//         <TaskForm onCreate={handleTaskCreate} />
//         <TaskList tasks={tasks} onDelete={handleTaskDelete} />
//     </div>
//   );
// };

// export default App;

