import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
          <nav className="flex justify-between">
            <Link to="/" className="hover:underline text-lg font-bold transition">Home</Link>
            <div>
              <Link to="/login" className="m-2 hover:underline text-lg font-bold transition">Log In</Link>
              <Link to="/register" className="m-2 hover:underline text-lg font-bold transition">Register</Link>
            </div>
          </nav>
        </header>
        <main className="p-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ToDoList />} />
          </Routes>
        </main>
        <div id="modal-root"></div>
      </div>
    </Router>
  );
}

export default App;
