import React, { useState } from "react";
import TaskList from "./TaskList";

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) return;

    const newTask = {
      _id: Date.now().toString(),
      title,
      description,
      dueDate,
      priority,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
          required
        ></textarea>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Add Task
        </button>
      </form>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
};

export default TaskForm;
