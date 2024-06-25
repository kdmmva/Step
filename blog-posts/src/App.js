import React, { useEffect } from 'react';
import PostList from './components/PostList';
import './App.css';

function App() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const flashlight = document.querySelector('.flashlight');
            flashlight.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.8) 150px, rgba(0,0,0,0.8) 200px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="App">
            <h1>Blog Posts</h1>
            <PostList />
            <div className="flashlight"></div>
        </div>
    );
}

export default App;
