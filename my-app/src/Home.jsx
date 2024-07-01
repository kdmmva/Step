import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  const location = useLocation();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (location.state != null) {
      setIsSignedIn(location.state.isSignedIn);
    }
  }, [location.state]); 

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <header>
        <Navbar isSignedIn={isSignedIn} />
      </header>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
