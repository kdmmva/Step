import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(props.isSignedIn);

  useEffect(() => {
    setIsLoggedIn(props.isSignedIn);
  }, [props.isSignedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navbarList = isLoggedIn
    ? [
        { id: 1, text: "Home" },
        { id: 2, text: "Logout" },
      ]
    : [
        { id: 1, text: "Home" },
        { id: 2, text: "Login" },
        { id: 3, text: "Register" },
      ];

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Tailwindui
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-red-500 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="Open main menu"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 1.75h15M1 7h15M1 12.25h15"
            />
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:ml-auto md:space-x-4">
          <ul className="flex space-x-4">
            {navbarList.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.text === "Home" ? "/" : `/home/${item.text.toLowerCase()}`}
                  className="block py-2 px-4 rounded-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:text-red-500 dark:hover:text-red-500 dark:focus:ring-gray-600"
                  onClick={() => {
                    if (item.text === "Home" || item.text === "Logout") {
                      navigateTo(`/home`);
                    } else {
                      navigateTo(`/home/${item.text.toLowerCase()}`);
                    }
                    if (item.text === "Logout") {
                      handleLogout();
                    }
                  }}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
