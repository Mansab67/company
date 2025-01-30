import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Trash2, Edit } from 'lucide-react';
import { getTasks, deleteTask, updateTask } from '../services/api';
import { TaskForm } from './TaskForm';

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      const updatedTask = await updateTask(task.id, {
        completed: !task.completed
      });
      setTasks(tasks.map(t => t.id === task.id ? updatedTask : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleUpdate = async (updatedTask) => {
    try {
      const result = await updateTask(updatedTask.id, updatedTask);
      setTasks(tasks.map(t => t.id === updatedTask.id ? result : t));
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <TaskForm onTaskCreated={fetchTasks} />
      
      <div className="mt-8">
        {tasks.map(task => (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow"
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleToggleComplete(task)}
                className="text-blue-500 hover:text-blue-600"
              >
                {task.completed ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <Circle className="h-6 w-6" />
                )}
              </button>
              <div>
                <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                  {task.title}
                </h3>
                <p className="text-gray-500">{task.description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(task)}
                className="p-2 text-gray-500 hover:text-blue-500"
              >
                <Edit className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="p-2 text-gray-500 hover:text-red-500"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <TaskForm
              task={editingTask}
              onTaskCreated={handleUpdate}
              onCancel={() => setEditingTask(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}