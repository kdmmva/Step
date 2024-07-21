import React, { useState } from 'react';
import Modal from './Modal';

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task && dueDate) {
      setTasks([...tasks, { task, dueDate }]);
      setTask('');
      setDueDate('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setShowModal(false);
  };

  const confirmDeleteTask = (index) => {
    setTaskToDelete(index);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleAddTask} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Add Task</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter a task"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition transform hover:scale-105">Add Task</button>
      </form>

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Tasks</h2>
        <ul className="space-y-4">
          {tasks.map((t, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center transform transition duration-500 hover:scale-105">
              <div>
                <span className="block font-semibold">{t.task}</span>
                <span className="block text-gray-500">{t.dueDate}</span>
              </div>
              <button
                onClick={() => confirmDeleteTask(index)}
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition transform hover:scale-105"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <Modal>
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-center">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this task?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700 transition transform hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteTask(taskToDelete)}
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition transform hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
