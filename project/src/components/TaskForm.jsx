import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { createTask } from '../services/api';

export function TaskForm({ task, onTaskCreated, onCancel }) {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task) {
        onTaskCreated({ ...task, title, description });
      } else {
        const newTask = await createTask({ title, description, completed: false });
        onTaskCreated(newTask);
        setTitle('');
        setDescription('');
      }
    } catch (error) {
      console.error('Error creating/updating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>
      <div className="flex justify-end space-x-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          {task ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
}