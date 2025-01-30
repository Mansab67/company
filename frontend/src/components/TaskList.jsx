import React from 'react';

const TaskList = ({ tasks, onDelete }) => {  
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="p-4 border rounded flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Priority: {task.priority}</p>
          </div>
          <button
            onClick={() => onDelete(task._id)}  
            className="p-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
