import React from 'react';

export default function Login() {
  return (
    <div className="flex justify-center items-center h-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Log In</h1>
        <form className="space-y-4">
          <input
            type="email"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
