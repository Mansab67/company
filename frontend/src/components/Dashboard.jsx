import React from "react";
import { Link } from "react-router-dom";
import TaskForm from "./TaskForm";
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="p-6">
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold"></h1>
        <div className="space-x-4">
          <Link to="/" ></Link>
          <Link to="/signup" >Sign Up</Link>
        </div>
      </nav>
      <TaskForm />
    </div>
  );
};

export default Dashboard;
